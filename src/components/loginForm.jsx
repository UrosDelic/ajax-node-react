import React, { Component } from "react";
import "../assets/style.css";
import getData from "../client/GetData";
class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      responseData: [],
      email: "",
      password: "",
    };

    this.emailHandleChange = this.emailHandleChange.bind(this);
    this.passwordHandleChange = this.passwordHandleChange.bind(this);
    this.textareaHandleChange = this.textareaHandleChange.bind(this);
  }

  emailHandleChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordHandleChange(event) {
    this.setState({ password: event.target.value });
  }

  textareaHandleChange(event) {
    this.setState({ responseData: event.target.value });
  }

  getServerData = () => {
    getData
      .getData()
      .then((response) => {
        this.setState({ responseData: response });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  postInputData = () => {
    const obj = {
      email: this.state.email,
      password: this.state.password,
    };
    getData
      .postData(obj)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error(error);
      });
  };

  showData = () => {
    if (this.state.responseData.length === 0) {
      return "";
    } else
      return `email: ${this.state.responseData.email}\npassword: ${this.state.responseData.password}`;
  };

  render() {
    return (
      <div className="loginForm-container">
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input
          className="input"
          type="text"
          id="emailField"
          value={this.state.email}
          onChange={this.emailHandleChange}
        />
        <label className="label" htmlFor="password">
          Password:
        </label>
        <input
          className="input"
          type="text"
          id="passwordField"
          value={this.state.password}
          onChange={this.passwordHandleChange}
        />
        <button className="btn" id="btn-post-data" onClick={this.postInputData}>
          Post Data
        </button>
        <div className="displayArea">
          <label className="label" htmlFor="text-area">
            Show data:
          </label>
          <textarea
            id="textArea"
            className="text-area"
            readOnly
            value={this.showData()}
            onChange={this.textareaHandleChange}
          ></textarea>
          <button className="btn" id="btn-get-data" onClick={this.getServerData}>
            Get data
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
