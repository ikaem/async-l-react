import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./header.component";
import Footer from "./footer.component";

import Swansea from "../../assets/fonts/Swansea.woff";
import SwanseaBold from "../../assets/fonts/SwanseaBold.woff";

const Layout: React.FC = ({ children }) => {
  const [isNavigationActive, setIsNavigationActive] = useState(false);
  return (
    <>
      <GlobalStyle isNavigationActive={isNavigationActive} />
      <Header
        onSetIsNavigationActive={setIsNavigationActive}
        isNavigationActive={isNavigationActive}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle<{ isNavigationActive: boolean }>`
    @font-face {
        font-family: "Swansea";
        src: url(${Swansea}) format("woff");
        font-weight: 400;
        font-display: "swap"
    }
    @font-face {
        font-family: "Swansea";
        src: url(${SwanseaBold}) format("woff");
        font-weight: 700;
        font-display: "swap"
    }

/* variables */

:root {
  --ligthGray: #f5f5f5;
  --gray: #d6d6d6;
  --darkGray: #525252;
  --dark: #1d1d1d;
  --transparent: rgba(18, 18, 18, 0);
}

/* reset */
* {
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100%;
}

body {
  overflow-x: hidden;
  overflow-y: ${(props) => (props.isNavigationActive ? "hidden" : "visible")};
}

body,
ul,
a,
h1,
h2,
h3,
p,
fieldset,
input,
textarea,
button {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style-type: none;
  border: none;
}

input:focus,
textarea:focus,
button:focus {
  outline: none;
}

/* fonts */
html {
  font-family: "Swansea", Verdana, sans-serif;
  font-size: 100%;
}

/* layout */
#root {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
`;
