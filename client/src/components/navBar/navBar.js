import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AllArticles from '../articles/allArticles.js';
import AllHeaders from '../headers/allHeaders.js';
import Search from '../search/search.js'
import logo from './logo.PNG'



class NavBar extends React.Component {
    state = {
        articles: [],
        headers: [],
        searchValue: '',
    }
    componentDidMount(){
        var url = 'http://newsapi.org/v2/top-headlines?' +
                  'country=us&' +
                  'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

        var req = new Request(url);
        let fetchReq = fetch(req);
        // console.log(fetchReq);
        fetchReq.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                return this.setState({headers: data1.articles});
            }))
        })
	}
    handleArticlesClick(searchValue) {
        console.log('we At handleArticlesClick');
        var query = this.state.searchValue || 'Web development';
        var url = 'http://newsapi.org/v2/everything?' +
        'q=' + query + '&' +
        'from=2020-07-12&' +
        'sortBy=popularity&' +
        'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

        var req = new Request(url);
        let fetchReq = fetch(req);
        // console.log(fetchReq);
        fetchReq.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                this.setState({articles: data1.articles});
            }))
        })
    }
    handleHeadersClick () {
        var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';

        var req = new Request(url);
        let fetchReq = fetch(req);
        // console.log(fetchReq);
        fetchReq.then((data) => {
            console.log(data.json().then((data1) => {
                console.log(data1.articles);
                this.setState({headers: data1.articles});
            }))
        })
    }
    searchCallback(searchValue) {
        console.log('we At searchCallback');
        this.setState({searchValue: searchValue});
        this.handleArticlesClick(searchValue);
    }
    render() {
        return (
        <Router>
            <nav>
                
                <ul>
                    <li> <img src={logo} className="logo " alt="Logo"/></li>
                    <li onClick={this.handleHeadersClick.bind(this)}><Link to="/"> SNAY News</Link></li>
                    <li onClick={this.handleHeadersClick.bind(this)}><Link to="/">HeadLines</Link></li>
                    <li onClick={this.handleArticlesClick.bind(this)}><Link to='/articles'>Articles</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path ='/articles'>
                <Search callbackfromNavBar = {this.searchCallback.bind(this)} />
                    <AllArticles articles = {this.state.articles} />
                </Route>
                <Route path='/'>
                    <AllHeaders headers = {this.state.headers} />
                </Route>
            </Switch>
        </Router>
        )
    }
}

export default NavBar;
