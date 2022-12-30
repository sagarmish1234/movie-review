import React from 'react';
import { useState } from 'react';
import './register.css';
import Image from '../../assets/images/register-image1.webp';
import { apiRegisterRequest } from '../../utils/springUtils';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    password: '',
    cpassword: '',
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.cpassword != newUser.password) {
      alert('Password mismatch');
      return;
    }
    apiRegisterRequest(newUser)
      .then((response) => {
        alert(response.data.message);
        navigate('/login');
        // alert(response.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="registerContainer">
      <img src={Image} alt="" className="registerImage" />
      <div className="registerFormContainer">
        <h2 className="registerFormHeader">Sign up for an account</h2>
        <form className="registerForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={newUser.firstName}
            placeholder="First Name"
            onChange={handleChange}
            className="registerFormInputs"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={newUser.lastName}
            className="registerFormInputs"
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={newUser.email}
            placeholder="Enter Email"
            className="registerFormInputs"
            required
          />
          <input
            type="number"
            min={'1'}
            onChange={handleChange}
            name="age"
            value={newUser.age}
            placeholder="Enter Age"
            className="registerFormInputs"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={newUser.password}
            placeholder="Enter Password"
            className="registerFormInputs"
            required
          />
          <input
            type="password"
            name="cpassword"
            onChange={handleChange}
            value={newUser.cpassword}
            placeholder="Confirm Password"
            className="registerFormInputs"
            required
          />

          <button type="submit" className="registerFormButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
