import React, { Component } from "react";
import axios from "axios";
import history from "../../history.js";
import "./style.css";

export default class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submit() {
    axios
      .post("http://localhost:5000/users/sign-up", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then((result) => {
        console.log(result, "result");
        return history.push('/articles')
      })
      .catch((err) => {
        console.log("err in sending data from axios to db: ", err);
      });
  }
  render() {
    // const { history } = this.props;
    //console.log(this.props, 'this.props');
    return (
      <div>
        <div className='SignUp-page__div'>
          <label htmlFor='email' className='SignUp-page__label'>
            Username
          </label>

          <input
            name='username'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />

          <label htmlFor='email' className='SignUp-page__label'>
            Email
          </label>

          <input
            name='email'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />

          <label htmlFor='email' className='SignUp-page__label'>
            password
          </label>
          <input
            name='password'
            placeholder=''
            className='SignUp-page__input'
            onChange={this.handleChange.bind(this)}
          />

          <button
            className='SignUp-page__button'
            onClick={this.submit.bind(this)}
          >
            Sign up
          </button>
        </div>
      </div>
    );
  }
}
