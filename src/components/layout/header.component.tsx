import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoP1 } from "../../assets/images/logo-p1.svg";
import { ReactComponent as LogoP2 } from "../../assets/images/logo-p2.svg";

import HeaderNavigation from "./header-navigation.component";

interface HeaderProps {
  onSetIsNavigationActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNavigationActive: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onSetIsNavigationActive,
  isNavigationActive,
}) => {
  return (
    <HeaderStyled>
      <div className="main-header_content">
        <a href="" className="main-header_header-logo-container">
          <LogoP1 />
          <LogoP2 />
        </a>
        <div
          className="main-header_navigation-trigger"
          onClick={() => onSetIsNavigationActive(true)}
        >
          <span></span>
          <span></span>
        </div>
      </div>
      <HeaderNavigation
        onSetIsNavigationActive={onSetIsNavigationActive}
        isNavigationActive={isNavigationActive}
      />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  position: fixed;
  /* background-color: yellow; */
  width: 100%;

  z-index: 1;

  .main-header_content {
    padding: 1.75rem;
    max-width: 1140px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .main-header_header-logo-container {
    display: flex;
    align-items: flex-end;
  }

  .main-header_header-logo-container > svg {
    height: 1.75rem;
    fill: var(--dark);
  }
  .main-header_header-logo-container > svg:nth-child(2) {
    height: 1.5rem;
    margin-left: 0.25rem;
  }

  .main-header_navigation-trigger {
    height: 100%;
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
  }

  .main-header_navigation-trigger > span {
    height: 2px;
    background-color: var(--dark);
    align-self: flex-end;
    transition: width 200ms ease-in 50ms;
  }

  .main-header_navigation-trigger > span:first-child {
    width: 100%;
  }

  .main-header_navigation-trigger > span:nth-child(2) {
    width: 65%;
    margin-top: 0.5rem;
  }

  .main-header_navigation-trigger:hover > span:first-child {
    width: 65%;
  }
  .main-header_navigation-trigger:hover > span:nth-child(2) {
    width: 100%;
  }

  /* desktop */
  @media (min-width: 1080px) {
    .main-header_content {
      padding: 1.75rem 0;
    }
  }
`;
