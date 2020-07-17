import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";


import "./style.css";
export default class Login extends Component {
  state = {
    email: "",
    password: "",
    redirect: null
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleClick() {
    axios
    .post("http://localhost:5000/api/users/login", {
      email: this.state.email,
      password: this.state.password,
    })
    .then((result) => {
      console.log(result.data);
      if(result.data) {
        console.log('redirect to articles');
        this.setState({redirect: '/articles'})
      }
      console.log('Logged in');
      alert('Logged in');
    })
    .catch((err) => {
      console.log("err in logging in ", err);
      alert('No such User !, create a new account');
    });
}

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className='Login-page__div'>
        <label htmlFor='email' className='Login-page__label'>
          Email
        </label>
        <input
          name='email' 
          type='email'
          placeholder='Enter Email'
          className='Login-page__input'
          onChange={this.handleChange.bind(this)}
        />

        <label htmlFor='password' className='Login-page__label'>
          password
        </label>
        <input
          name='password' 
          type='password'
          placeholder='Enter password'
          className='Login-page__input'
          onChange={this.handleChange.bind(this)}
        />

        <button
          className='Login-page__button'
          onClick={this.handleClick.bind(this)}
        >
          login
        </button>
      </div>
    );
  }
}
