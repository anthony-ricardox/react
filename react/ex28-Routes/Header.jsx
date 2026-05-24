import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.module.css";
const Header = () => {
  const active = ({ isActive }) => (isActive ? { color: "green" } : {});
  return (
    <nav>
      <NavLink to="/" end style={active}>
        Home
      </NavLink>
      <NavLink style={active} to="sobre">
        Sobre
      </NavLink>
      <NavLink style={active} to="login">Login</NavLink>
      <NavLink style={active} to="contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default Header;
