import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoP1 } from "../assets/images/logo-p1.svg";
import { ReactComponent as LogoP2 } from "../assets/images/logo-p2.svg";

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <div className="main-header_content">
        <a href="" className="main-header_header-logo-container">
          <LogoP1 />
          <LogoP2 />
        </a>
        <div className="main-header_navigation-trigger">
          <span></span>
          <span></span>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
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
  }

  .main-header_navigation-trigger:hover > span:first-child {
    width: 65%;
  }
  .main-header_navigation-trigger:hover > span:nth-child(2) {
    width: 100%;
  }

  .main-header_navigation-trigger > span {
    height: 2px;
    background-color: var(--dark);
    align-self: flex-end;
  }

  .main-header_navigation-trigger > span:first-child {
    width: 100%;
  }

  .main-header_navigation-trigger > span:nth-child(2) {
    width: 65%;
    margin-top: 0.5rem;
  }
`;
