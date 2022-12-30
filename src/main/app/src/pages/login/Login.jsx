import React, { useState } from 'react';
import './login.css';
import Image from '../../assets/images/login-image.jpg';
import { apiLoginRequest } from '../../utils/springUtils';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    apiLoginRequest(user)
      .then((response) => {
        localStorage.setItem(
          'token',
          JSON.stringify(response.data.token)
        );
        localStorage.setItem('username', response.data.username);
        navigate('/');
        // console.log(response);
        // alert("User Login successfully");
      })
      .catch((err) => {
        // console.log(err);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="loginContainer">
      <img src={Image} alt="" className="loginImage" />
      <div className="loginFormContainer">
        <h2 className="loginFormHeader">Sign in to account</h2>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            name="username"
            onChange={handleChange}
            value={user.username}
            placeholder="Enter Email"
            className="loginFormInputs"
            required
          />

          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            placeholder="Enter Password"
            className="loginFormInputs"
            required
          />

          <button type="submit" className="loginFormButton">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
