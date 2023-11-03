import React, { useContext } from "react";
import { auth } from "../utils/firebase";
import { userData } from "../utils/UserContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const firebaseUser = auth.currentUser;
  const navigate = useNavigate();
  const { user, setUser } = useContext(userData);
  const logoutt = () => {
    setUser(false);
    navigate("/login");
  };
  if (firebaseUser !== null) {
    const displayname = firebaseUser.displayName;
    const email = firebaseUser.email;
    return (
      <>
        <h1>Welcome {displayname}</h1>
        <h2>Email:{email}</h2>
        <button onClick={logoutt}>Sign-Out!</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Error no user</h1>
        <button onClick={logoutt}>Sign-Out!</button>
      </>
    );
  }
}

export default Home;
