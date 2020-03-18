import React from "react";
import "./Button.css";
import styled from "@emotion/styled";

const ButtonPrimary = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

export default function Button(props) {
  return <ButtonPrimary {...props} />;
}
