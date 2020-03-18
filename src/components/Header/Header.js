import React from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../Button";

const Brand = styled.div`
  margin: 20px;
  display: flex;
`;

const BrandName = styled.div`
  font-size: 2rem;
  margin: auto 10px;
`;

function Header({ onSwitchColorButton }) {
  return (
    <header>
      <Brand>
        <Link to="/">
          <img src={Logo} alt=""></img>
        </Link>
        <BrandName> SimplePoll</BrandName>
      </Brand>
      <Button onClick={onSwitchColorButton}>
        <span>🌓</span>
      </Button>
    </header>
  );
}

export default Header;
