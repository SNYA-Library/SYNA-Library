import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import AllArticles from '../articles/allArticles.js';
import AllHeaders from '../headers/allHeaders.js';

class NavBar extends React.Component {
    state = {
        articles: [],
        headers: []
    }
    handleArticlesClick() {
        var url = 'http://newsapi.org/v2/everything?' +
        'q=Apple&' +
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
    render() {
        return (
        <Router>
            <nav>
                <ul>
                    <li onClick={this.handleHeadersClick.bind(this)}><Link to="/headers">HeadLines</Link></li>
                    <li onClick={this.handleArticlesClick.bind(this)}><Link to='/articles'>Articles</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path ='/articles'>
                    <AllArticles articles = {this.state.articles} />
                </Route>
                <Route path='/headers'>
                    <AllHeaders headers = {this.state.headers} />
                </Route>
            </Switch>
        </Router>
        )
    }
}

export default NavBar;
