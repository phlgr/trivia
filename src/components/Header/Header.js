import React from "react";
import "./Header.css";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="brand">
        <Link to="/">
          <img className="logo" src={Logo} alt=""></img>
        </Link>
        <div className="name"> SimplePoll</div>
      </div>
    </header>
  );
}

export default Header;
