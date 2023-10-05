import React, { useState } from 'react';
import './login.css';

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCpassword] = useState("");

  const Form = [
    {
      Label: "Username",
      type: "text",
      placeHolder: "Username Here",
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      Label: "Email",
      type: "email",
      placeHolder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      Label: "Password",
      type: "password",
      placeHolder: "Password Here",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      Label: "Confirm Password",
      type: "password",
      placeHolder: "Reenter Password",
      value: cpassword,
      onChange: (e) => setCpassword(e.target.value),
    }
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername("")
    setEmail("")
    setPassword("")
    setCpassword("");
  };

  return (
    <div className="login-container">
      <div className="form-box">
        <form action="" onSubmit={submitHandler}>
          {Form.map((item, index) => (
            <div key={index} className="input-box">
              <label htmlFor={item.Label}>{item.Label}</label>
              <input
                type={item.type}
                placeholder={item.placeHolder}
                value={item.value}
                onChange={item.onChange}
                className="input"
              />
            </div>
          ))}
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <label className="label">Continue with Google</label>
        <div className="icon-img">
        <img src="../images/google.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default SignUp;
