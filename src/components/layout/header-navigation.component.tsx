import React, { useState } from "react";
import styled from "styled-components";

interface HeaderNavigation {
  onSetIsNavigationActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNavigationActive: boolean;
}

const HeaderNavigation: React.FC<HeaderNavigation> = ({
  onSetIsNavigationActive,
  isNavigationActive,
}) => {
  const [test, setTest] = useState(false);
  return (
    <HeaderNavigationStyled isNavigationActive={isNavigationActive}>
      <nav
        className={`header-navigation_nav-background ${
          test && "nav-background-spread"
        }`}
      >
        <p onClick={() => setTest((prev) => !prev)}>Hello navigation</p>
      </nav>
      <button onClick={() => onSetIsNavigationActive(false)}>Close</button>
    </HeaderNavigationStyled>
  );
};

export default HeaderNavigation;

const HeaderNavigationStyled = styled.div<{ isNavigationActive: boolean }>`
  display: ${(props) => (props.isNavigationActive ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  overflow-y: hidden;

  .header-navigation_nav-background {
    background-color: red;
    height: 20px;
  }
  .nav-background-spread {
    height: 100vh;
    transition: height 2000ms ease-in 1s;
  }
`;
