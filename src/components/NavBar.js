import React from "react";
import { NavLink } from "react-router-dom";

 /* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

 function NavBar(){
  return (
    <div>
      <NavLink to="/"  exact style={linkStyles} activestyle={{background:"darkblue",}} >Home</NavLink>
      <NavLink to="/about" exact style={linkStyles} activestyle={{ background: "darkblue",}}>ABout</NavLink>
      <NavLink to="/login" exact style={linkStyles} activestyle={{ background: "green",}}>Login</NavLink>
      <NavLink to="/signUp" exact style={linkStyles} activestyle={{ background: "green",}}>SignUp</NavLink>
      <NavLink to="/messages" exact style={linkStyles} activestyle={{ background: "green",}}>Messages</NavLink>
    </div>
  );
 }
 export default NavBar;