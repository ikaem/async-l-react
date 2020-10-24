import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LinkArrow } from "../../assets/images/link-arrow.svg";

interface OtherServicesNavProps {
  otherServices: {
    id: string;
    backgroundImage: string;
    title: string;
  }[];
}

const OtherServicesNav: React.FC<OtherServicesNavProps> = ({
  otherServices,
}) => {
  return (
    <OtherServicesNavStyled className="other-services-nav">
      <ul className="other-services-nav_services-list">
        {otherServices.map((service) => {
          return (
            <li
              style={{
                backgroundImage: `url(${service.backgroundImage})`,
              }}
              className="services-list_service-item"
            >
              <Link to={`/service/${service.id}`}>
                <span>{service.title}</span>
                <LinkArrow />
              </Link>
            </li>
          );
        })}
      </ul>
    </OtherServicesNavStyled>
  );
};

export default OtherServicesNav;

const OtherServicesNavStyled = styled.nav`
  .other-services-nav_services-list {
    display: flex;
    flex-direction: column;
    height: 400px;
  }

  .services-list_service-item {
    display: flex;
    flex-basis: 50%;
    background-size: cover;
    background-position: center;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--blue);
      position: absolute;
      opacity: 0.5;
      transition: opacity 300ms ease-in;
    }

    > a {
      color: white;
      font-size: 1.125rem;
      font-weight: 700;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      > svg {
        margin-left: 0.5rem;
      }
    }

    &:hover {
      &::before {
        opacity: 0;
      }
    }
  }

  /* desktop */
  @media (min-width: 1080px) {
    .other-services-nav_services-list {
      flex-direction: row;
    }
  }
`;
