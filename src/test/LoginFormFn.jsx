import { useState } from "react";
import "../assets/style.css";
import "../components/LoginForm/LoginForm.css";
import getData from "../client/GetData";
import Dinput from "../components/customElements/Dinput";
// import DtextArea from "../components/customElements/DtextArea";
import DtextAreaFn from "./DtextAreaFn";

const LoginFormFn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [infoText, setInfoText] = useState("");
  const [txtAreaHidden, setTxtArea] = useState(true);

  const emailHandleChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandleChange = (event) => {
    setPassword(event.target.value);
  };
  const getServerData = () => {
    getData.getData().then((response) => {
      setEmail(response.email);
      setPassword(response.password);
    });
  };
  const postInputData = () => {
    const obj = { email, password };
    getData
      .postData(obj)
      .then((response) => {
        setInfoText(`data sent successfully!`);
        setTxtArea(false);
      })
      .catch((error) => console.error(error));
  };
  const showInfo = () => {
    if (infoText === "") {
      return ``;
    } else return infoText;
  };

  return (
    <div className='loginForm-container'>
      <h1>Ajax - Node.js in React</h1>
      <div className='inputs-container'>
        <label className='label' htmlFor='email'>
          Email:
        </label>
        <Dinput type='text' id='emailField' value={email} onChange={emailHandleChange} />
        <label className='label' htmlFor='password'>
          Password:
        </label>
        <Dinput
          type='password'
          id='passwordField'
          value={password}
          onChange={passwordHandleChange}
        />
        <button
          disabled={!password || !email}
          className='btn'
          id='btn-post-data'
          onClick={postInputData}
        >
          Post Data
        </button>
        <button className='btn' id='btn-get-data' onClick={getServerData}>
          Get data
        </button>
      </div>
      <div className='displayArea'>
        <DtextArea hidden={txtAreaHidden} readOnly value={showInfo()} />
      </div>
    </div>
  );
};

export default LoginFormFn;
