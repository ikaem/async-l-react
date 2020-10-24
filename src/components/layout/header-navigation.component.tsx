import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import backgroundImage from "../../assets/images/nav-back.jpg";

interface HeaderNavigation {
  onSetIsNavigationActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNavigationActive: boolean;
}

const HeaderNavigation: React.FC<HeaderNavigation> = ({
  onSetIsNavigationActive,
  isNavigationActive,
}) => {
  console.log("this background image", backgroundImage);
  return (
    <HeaderNavigationStyled
      backgroundImage={backgroundImage}
      isNavigationActive={isNavigationActive}
    >
      <nav
        className={`header-navigation_nav ${
          isNavigationActive ? "nav-expand" : "nav-shrink"
        }`}
      >
        <button
          className={`nav_close ${
            isNavigationActive ? "nav_close-block" : "nav_close-none"
          }`}
          onClick={() => onSetIsNavigationActive(false)}
        >
          x
        </button>

        <ul className="nav_items">
          <li className="nav__item">
            <Link onClick={() => onSetIsNavigationActive(false)} to="/">
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <Link onClick={() => onSetIsNavigationActive(false)} to="/services">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderNavigationStyled>
  );
};

export default HeaderNavigation;

const HeaderNavigationStyled = styled.div<{
  isNavigationActive: boolean;
  backgroundImage: string;
}>`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  z-index: 99;

  .header-navigation_nav {
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: red;
    transition: width 500ms ease-in, opacity 300ms ease-out;
    overflow: hidden;
    background-image: url(${(props) => props.backgroundImage});
    background-color: var(--darkGrey);
    display: flex;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }

    &.nav-expand {
      width: 100vw;
      opacity: 1;
    }

    &.nav-shrink {
      width: 0;
      background-image: none;
      opacity: 0.5;
    }
  }

  .nav_close {
    position: absolute;
    z-index: 3;
    right: 0;
    top: 0;
    padding: 2rem;
    font-size: 2rem;
    background-color: transparent;
    color: var(--darkGray);
    transition: opacity 150ms ease-in 250ms;
    cursor: pointer;

    :hover {
      color: white;
    }

    &.nav_close-block {
      opacity: 1;
    }
    &.nav_close-none {
      opacity: 0;
    }
  }

  .nav_items {
    height: 100vh;
    background-color: var(--dark);
    margin-left: 2rem;
    padding: 8rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    z-index: 2;

    :hover a {
      color: var(--darkGray);
    }

    li {
      line-height: 300%;
      align-self: flex-start;
    }

    a {
      color: white;
      font-size: 2.5rem;
      font-weight: 700;
      transition: color 300ms ease-in;

      :hover {
        color: white;
      }
    }
  }
`;
