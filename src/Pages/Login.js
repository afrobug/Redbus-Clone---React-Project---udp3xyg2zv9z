import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import { Email } from "@mui/icons-material";
import { auth, provider } from "../Firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const loginHandler = () => {
    localStorage.setItem("auth", true);
    navigate("/home");
    localStorage.setItem("Username", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("password", password);
  };

  const changedName = (event) => {
    setName(event.target.value);
  };
  const changedEmail = (event) => {
    setEmail(event.target.value);
  };

  const changedPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        if (res) {
          navigate("/home");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={name}
          placeholder="Username"
          onChange={changedName}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={changedEmail}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={changedPassword}
        />
        <button className="buttonDesign" onClick={loginHandler}>
          login
        </button>
        <button onClick={signInWithGoogle} className="buttonDesign">
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};
