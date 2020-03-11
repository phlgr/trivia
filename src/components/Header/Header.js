import React from "react";
import "./Header.css";
import Logo from "./logo.svg";

function Header() {
  return (
    <header>
      <div className="brand">
        <img className="logo" src={Logo} alt=""></img>
        <div className="name"> SimplePoll</div>
      </div>
    </header>
  );
}

export default Header;
