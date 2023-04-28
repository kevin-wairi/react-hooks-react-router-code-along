import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Messages from "./Messages";
import NavBar from "./NavBar";


 function App(){
return (
  <>
  <NavBar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path="/messages" element={<Messages />}></Route>
    </Routes>
  </>
);


 }
 export default App;