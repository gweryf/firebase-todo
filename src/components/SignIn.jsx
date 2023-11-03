import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { userData } from "../utils/UserContext";
function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userData);

  const signUpp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        setUser(true);
        navigate("/");
      })
      .catch((error) => {
        const mssg = error.message;
        console.log(mssg);
      });
  };

  return (
    <div>
      <h1>Sign-In</h1>
      <div>
        <form onSubmit={signUpp}>
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
          <button type="submit">Sign-Up</button>
        </form>
      </div>
      <div>
        <a href="/login">Already have an account? Log-in here!</a>
      </div>
    </div>
  );
}

export default SignIn;
