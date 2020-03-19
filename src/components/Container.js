import React from "react";
import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export default function Container(props) {
  return <MainContainer>{props.children}</MainContainer>;
}
