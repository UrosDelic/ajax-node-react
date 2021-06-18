import React, { Component } from "react";
import "../assets/style.css";
import "../client/GetData";
import getData  from "../client/GetData";
class LoginForm extends Component {
  state = {};
  render() {
    return (
      <div className='loginForm-container'>
        <label className='label' htmlFor='email'>
          Email:
        </label>
        <input className='input' type='text' id='inputField' />
        <label className='label' htmlFor='password'>
          Password:
        </label>
        <input className='input' type='text' id='passwordField' />
        <button className='btn' id='btn-post-data'>
          Post Data
        </button>
        <div className='displayArea'>
          <label className='label' htmlFor='text-area'>
            Show data:
          </label>
          <textarea id='textArea' className='text-area'></textarea>
          <button className='btn' id='btn-get-data' onClick={this.showData}>
            Get data
          </button>
        </div>
      </div>
    );
  }

  showData = () => {
    getData.getData().then((response) => {});
  };
}

export default LoginForm;
