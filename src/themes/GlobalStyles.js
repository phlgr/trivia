import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles() {
  return (
    <>
      <Global
        styles={theme => css`
          @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
          body {
            margin: 0;
            background: ${theme.background};
            color: #f2f2f2;
            font-size: 16px;
            font-family: Roboto;
          }
        `}
      />
    </>
  );
}
