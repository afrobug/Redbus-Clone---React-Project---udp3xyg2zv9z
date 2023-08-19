import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

export const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    localStorage.setItem("auth", true);
    navigate("/home");
    localStorage.setItem("Username", name);
    localStorage.setItem("password", password);
  };

  const changedName = (event) => {
    setName(event.target.value);
  };

  const changedPassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          value={name}
          placeholder="Username"
          onChange={changedName}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={changedPassword}
        />
        <button className="buttonDesign" onClick={loginHandler}>login</button>
      </form>
    </div>
  );
};
