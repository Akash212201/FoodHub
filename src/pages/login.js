import React, {useState} from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Form = [
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
    }
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if(email!=="" && password!==""){
      setEmail("")
      setPassword("")
    }
    else{
      if(email===""){
        alert("Enter your email")
      }
      else{
        alert("Enter your password")
      }
    }
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
      <input type="checkbox" /> Remember me!
      <button value="submit" className="btn">Login</button>
      </form>
      <label className="label">Continue with Google</label>
      <div className="icon-img">
      <img src="../images/google.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Login