import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ServiceWorkItemProps {
  id: string;
  imageUrl: string;
  title: string;
}

const ServiceWorkItem: React.FC<ServiceWorkItemProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <ServiceWorkItemStyled>
      <Link className="service-work-item_link" to="#">
        <img src={imageUrl} alt="Work graphic" />
        <span>{title}</span>
      </Link>
    </ServiceWorkItemStyled>
  );
};

export default ServiceWorkItem;

const ServiceWorkItemStyled = styled.li`
  width: 100%;

  .service-work-item_link {
    width: 100%;
    position: relative;
    display: block;

    > img {
      object-fit: cover;
      width: 100%;
    }

    > span {
      display: block;
      opacity: 0;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 50%;
      color: white;
      transition: opacity 300ms ease-in;
    }

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--blue);
      opacity: 0;
      transition: opacity 300ms ease-in;
    }

    &:hover {
      > span {
        opacity: 1;
      }
      &::before {
        opacity: 0.5;
      }
    }
  }
`;
