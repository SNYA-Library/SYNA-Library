import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'
import './style.css'

import AllArticles from '../articles/allArticles.js';
import AllHeaders from '../headers/allHeaders.js';
import Search from '../search/search.js'

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
        // var query = this.state.searchValue || 'Web development';
        // var url2 = 'http://newsapi.org/v2/everything?' +
        // 'q=' + query + '&' +
        // 'from=2020-07-12&' +
        // 'sortBy=popularity&' +
        // 'apiKey=cc3bbf80787c4c7ea91e7dcc8b051692';
        //
        // var req2 = new Request(url);
        // let fetchReq2 = fetch(req);
        // // console.log(fetchReq);
        // fetchReq2.then((data) => {
        //     console.log(data.json().then((data1) => {
        //         console.log(data1.articles);
        //         this.setState({articles: data1.articles});
        //     }))
        // })
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
                    <li onClick={this.handleHeadersClick.bind(this)}><Link to="/">HeadLines</Link></li>
                    <li onClick={this.handleArticlesClick.bind(this)}><Link to='/articles'>Articles</Link></li>
                    <li className="Nav__login"><NavLink to='/login'>Login</NavLink></li>
                    <li className="Nav__signup"><NavLink to='/sign-up'>Signup</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route path ='/articles'>
                <Search callbackfromNavBar = {this.searchCallback.bind(this)} />
                    <AllArticles articles = {this.state.articles} />
                </Route>
                <Route exact path='/'>
                    <AllHeaders headers = {this.state.headers} />
                </Route>

                <Route path="/login" component={Login} />
                <Route path="/sign-up" component={SignUp} />

            </Switch>
        </Router>
        )
    }
}

export default NavBar;
