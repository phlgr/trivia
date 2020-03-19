import React from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Brand = styled.div`
  margin: 20px;
  display: flex;
`;

const BrandName = styled.div`
  font-size: 2rem;
  margin: auto 10px;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const ThemeToggleSwitch = styled.span`
  background: #04d976;
  padding: 10px;
  border-radius: 10px;

  &:active {
    background: #04b976;
    transition: 0.02s;
  }
`;

function Header({ onSwitchColorButton }) {
  return (
    <HeaderContainer>
      <Brand>
        <Link to="/">
          <img src={Logo} alt=""></img>
        </Link>
        <BrandName> SimplePoll</BrandName>
      </Brand>
      <ThemeToggleSwitch onClick={onSwitchColorButton}>
        <span role="img" aria-label="Moon">
          🌓
        </span>
      </ThemeToggleSwitch>
    </HeaderContainer>
  );
}

export default Header;
