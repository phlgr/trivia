import React from "react";
import styled from "@emotion/styled";

const ButtonPrimary = styled.button`
  background: #04d976;
  padding: 10px 50px;
  border: none;
  border-radius: 30px;
  color: #f2f2f2;
  font-size: 1.8rem;
  text-decoration: none;
`;

export default function Button(props) {
  return <ButtonPrimary {...props} />;
}
