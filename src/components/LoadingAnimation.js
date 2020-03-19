import React from "react";
import styled from "@emotion/styled";

const IsLoadingContent = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    &:nth-of-type(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    &:nth-of-type(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    &:nth-of-type(3) {
      left: 56px;
      animation-delay: 0;
    }
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export default function LoadingAnimation() {
  return (
    <>
      <IsLoadingContent>
        <div></div>
        <div></div>
        <div></div>
      </IsLoadingContent>
    </>
  );
}
