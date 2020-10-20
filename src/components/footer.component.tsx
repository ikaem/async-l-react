import React from "react";
import styled from "styled-components";

import { ReactComponent as LogoP1 } from "../assets/images/logo-p1.svg";
import { ReactComponent as LogoP2 } from "../assets/images/logo-p2.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="main-footer_content">
        <div className="main-footer_footer-navigation">
          <a
            href="#"
            className="footer-navigation_footer-logo-container footer-navigation_section"
          >
            <LogoP1 />
            <LogoP2 />
          </a>
          <ul className="footer-navigation_option-items footer-navigation_section">
            <li className="footer-navigation__option-item">
              <a href="#">About</a>
            </li>
            <li className="footer-navigation__option-item">
              <a href="#">Projects</a>
            </li>
            <li className="footer-navigation__option-item">
              <a href="#">Blog</a>
            </li>
            <li className="footer-navigation__option-item">
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className="footer-navigation_option-items footer-navigation_section">
            <li className="footer-navigation__option-item">
              <a href="#">Facebook</a>
            </li>
            <li className="footer-navigation__option-item">
              <a href="#">LinkedIn</a>
            </li>
            <li className="footer-navigation__option-item">
              <a href="#">Twitter</a>
            </li>
            <li className="footer-navigation__option-item">
              <a href="#">Instagram</a>
            </li>
          </ul>
          <p className="footer-navigation_address footer-navigation_section">
            Async d.o.o
            <br />
            Lipovečka 1,
            <br />
            10000 Zagreb
            <br />
            Croatia
          </p>
          <a
            href="mailto:hello@asynclabs.co"
            className="footer-navigation_email footer-navigation_section"
          >
            hello@asynclabs.co
          </a>
        </div>
        <div className="main-footer_footer-rights">
          <p>© Async Labs. All rights reserved 2020.</p>
          <a href="#">Privacy Policy </a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  margin-top: auto;
  background-color: var(--dark);
  color: white;

  a {
    color: white;
  }
  .main-footer_content {
    padding: 1.75rem;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
  }

  .main-footer_footer-navigation {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-navigation_footer-logo-container,
  .footer-navigation_email {
    grid-column: span 3;
    justify-self: start;
  }

  .footer-navigation_footer-logo-container > svg {
    height: 1.75rem;
    fill: white;
  }
  .footer-navigation_footer-logo-container > svg:nth-child(2) {
    height: 1.5rem;
    margin-left: 0.25rem;
  }

  .footer-navigation_footer-logo-container {
    margin-top: 6px;
  }

  .footer-navigation__option-item,
  .footer-navigation_email,
  .footer-navigation_address {
    line-height: 32px;
  }
  .footer-navigation_address {
    color: var(--gray);
    justify-self: end;
  }

  .main-footer_footer-rights {
    display: flex;
    justify-content: space-between;
  }

  .main-footer_footer-rights > a {
    text-align: right;
  }
`;
