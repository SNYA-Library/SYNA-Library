import React, { Component } from "react";
import axios from "axios";
import history from "../../history.js";
import { BrowserRouter, Route } from "react-router-dom";
import Articles from "../../components/articles/allArticles.js";
import "./style.css";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  componentDidMount() {
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=cc3bbf80787c4c7ea91e7dcc8b051692";

    var req = new Request(url);
    let fetchReq = fetch(req);
    // console.log(fetchReq);
    fetchReq.then((data) => {
      console.log(
        data.json().then((data1) => {
          console.log(data1.articles);
          return this.setState({ headers: data1.articles });
        })
      );
    });
  }
  handleClick() {
    var options = {
      url: "http://localhost:5000/users/check-user/",
      method: "GET",
      body: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    axios(options)
      .then((result) => {
        console.log(result, "result");
        //  console.log(result.email, "result.email" );

        // if(result.email === ){

        // }

        // if (result.status === 200) {
        //   // console.log('grreaaaaaat', result);
        //   return history.push("/articles");
        // }
        // console.log("got", result);
        // console.log(result, "result");
      })
      .catch((err) => {
        console.log("err in fetching user data: ", err);
      });
  }

  render() {
    return (
      <div className='Login-page__div'>
        <label htmlFor='email' className='Login-page__label'>
          Email
        </label>
        <input
          name='email'
          placeholder=''
          className='Login-page__input'
          onChange={this.handleChange.bind(this)}
        />

        <label htmlFor='password' className='Login-page__label'>
          password
        </label>
        <input
          name='password'
          placeholder=''
          className='Login-page__input'
          onChange={this.handleChange.bind(this)}
        />

        <button
          className='Login-page__button'
          onClick={this.handleClick.bind(this)}
        >
          login
        </button>

        <BrowserRouter>
          <Route path='/articles' component={Articles} />
        </BrowserRouter>
      </div>
    );
  }
}
