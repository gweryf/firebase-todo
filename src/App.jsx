import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import PrivateRoutes from "./utils/PrivateRoutes";
import UserContext from "./utils/UserContext";
function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Home />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
