import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    props.setIsAuthenticated(true); 
    navigate("/home");
  };
  return (
    <div id="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Enter Your Mail/Mobile No:</label>
        <input type="email" placeholder="example@mail.com" required />
        <label>Enter Your Password:</label>
        <input type="password" placeholder="12345678" required />
        <button type="submit" id="sub">Login</button>
      </form>
      <div>Don't have an account?<a href="/sign" style={{ textDecoration: "underline" }}>Sign up</a></div>
    </div>
  );
};

export default Login;
