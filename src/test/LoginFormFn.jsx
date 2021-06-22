import { useState } from "react";
import "../assets/style.css";
import getData from "../client/GetData";
import DInput from "../components/DInput";
import DTextArea from "../components/DTextArea";

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
      <label className='label' htmlFor='email'>
        Email:
      </label>
      <DInput type='text' id='emailField' value={email} onChange={emailHandleChange} />
      <label className='label' htmlFor='password'>
        Password:
      </label>
      <DInput type='password' id='passwordField' value={password} onChange={passwordHandleChange} />
      <button
        disabled={!password || !email}
        className='btn'
        id='btn-post-data'
        onClick={postInputData}
      >
        Post Data
      </button>
      <div className='displayArea'>
        <DTextArea hidden={txtAreaHidden} readOnly value={showInfo()} />
        <button className='btn' id='btn-get-data' onClick={getServerData}>
          Get data
        </button>
      </div>
    </div>
  );
};

export default LoginFormFn;
