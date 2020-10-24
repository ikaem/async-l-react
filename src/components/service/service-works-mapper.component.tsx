import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LinkArrow } from "../../assets/images/link-arrow.svg";

import ServiceWorkItem from "./service-work-item.component";

interface ServiceWorksMapperProps {
  works: {
    id: string;
    imageUrl: string;
    title: string;
  }[];
}

const ServiceWorksMapper: React.FC<ServiceWorksMapperProps> = ({ works }) => {
  return (
    <ServiceWorksMapperStyled className="service-works-mapper">
      <h1 className="service-works-mapper_title">Work</h1>
      <ul className="service-works-mapper_work-list">
        {works.map((work) => (
          <ServiceWorkItem key={work.id} {...work} />
        ))}
      </ul>
      <Link to="#" className="service-works-mapper_all-work-link">
        <span>See all projects</span>
        <LinkArrow />
      </Link>
    </ServiceWorksMapperStyled>
  );
};

export default ServiceWorksMapper;

const ServiceWorksMapperStyled = styled.section`
  padding: 1.75rem;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  .service-works-mapper_title {
    font-size: 70px;
    color: var(--dark);
    margin-bottom: 1.75rem;
  }

  .service-works-mapper_work-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem;
    width: 100%;
  }

  .service-works-mapper_all-work-link {
    display: inline-block;
    color: var(--dark);
    font-size: 1.125rem;
    margin-top: 2.75rem;

    > svg {
      margin-left: 0.5rem;
    }
  }

  @media (min-width: 1080px) {
    padding: 1.75rem 6rem 11rem;

    .service-works-mapper_title {
      font-size: 130px;
      text-align: right;
      padding-right: 6rem;
    }

    .service-works-mapper_work-list {
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
    }
  }
`;
