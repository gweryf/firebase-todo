import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../utils/firebase";
import { useState, useEffect } from "react";
import { userData } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userData);
  const loggin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        setUser(true);
        navigate("/");
      })
      .catch((error) => {
        const mssg = error.message;
        console.log(mssg);
      });
  };

  useEffect(() => {
    console.log(email);
  }, [email]);
  useEffect(() => {
    console.log(password);
  }, [password]);
  return (
    <div>
      <h1>Log-In</h1>
      <div>
        <form onSubmit={loggin}>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            name="password"
            id="password"
          />
          <button type="submit">Log-In</button>
        </form>
      </div>
      <div>
        <a href="/signin">Don't have an account? Sign-up here!</a>
      </div>
    </div>
  );
}

export default LogIn;
