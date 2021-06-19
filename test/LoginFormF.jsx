import React from "react";
import { useEffect } from "react";
import "../assets/style.css";
import getData from "../client/GetData";

const LoginForm = () => {
  useEffect(() => {
    getServerData();
  }, []);

  const getServerData = () => {
    getData
      .getData()
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div className="loginForm-container">
      <label className="label" htmlFor="email">
        Email:
      </label>
      <input className="input" type="text" id="inputField" />
      <label className="label" htmlFor="password">
        Password:
      </label>
      <input className="input" type="text" id="passwordField" />
      <button className="btn" id="btn-post-data">
        Post Data
      </button>
      <div className="displayArea">
        <label className="label" htmlFor="text-area">
          Show data:
        </label>
        <textarea id="textArea" className="text-area"></textarea>
        <button className="btn" id="btn-get-data" onClick={this.getServerData}>
          Get data
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
