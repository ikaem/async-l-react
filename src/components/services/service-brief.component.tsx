import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ServiceItemBriefInterface } from "../../data/fake-data";

interface ServiceBriefProps {
  serviceBrief: ServiceItemBriefInterface;
}

const ServiceBrief: React.FC<ServiceBriefProps> = ({ serviceBrief }) => {
  const { id, images, title, lead, features } = serviceBrief;
  return (
    <ServiceBriefStyled>
      <ul className="service-brief_images-wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={`service-brief__image${index + 1}-container`}
            >
              <img
                src={image}
                alt="Service graphic"
                className={`service-brief__image${index + 1}`}
              />
            </div>
          );
        })}
      </ul>

      <div className="service-brief_service-info">
        <h2 className="service-info_title">{title}</h2>
        <p className="service-info_lead">{lead}</p>
        <ul className="service-info_features-list">
          {features.map((feature) => (
            <li key={feature} className="service-info__feature-item">
              {feature}
            </li>
          ))}
        </ul>
        <Link className="service-info_service-cta" to={`/service/${id}`}>
          View Service
        </Link>
      </div>
    </ServiceBriefStyled>
  );
};

export default ServiceBrief;

const ServiceBriefStyled = styled.li`
  display: flex;
  flex-direction: column;
  margin: 3.75rem 0;

  .service-brief_images-wrapper {
    margin: 0 -1.75rem;

    > div {
      width: 100%;

      > img {
        width: 100%;
      }
    }
  }

  .service-brief__image1-container {
    display: none;
  }

  .service-brief_service-info {
    padding: 2rem 0 0;
    margin: 2rem 0 0;
    color: var(--dark);
  }

  .service-info_title {
    font-size: 2.875rem;
    line-height: 58px;
    margin-bottom: 2rem;
  }

  .service-info_lead {
    font-size: 1.25rem;
    color: var(--darkGray);
    line-height: 30px;
  }

  .service-info_features-list {
    margin: 1.25rem 0 3rem;
  }

  .service-info__feature-item {
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    line-height: 300%;
    font-weight: 700;
    width: 100%;

    ::before {
      content: "–";
      margin-right: 1.25rem;
      color: var(--blue);
    }
  }

  .service-info_service-cta {
    background-color: var(--dark);
    color: white;
    padding: 1.25rem 3.5rem;
    font-size: 1.125rem;
  }

  /* desktop */
  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > div,
    ul {
      width: 50%;

      &:first-child {
        margin-right: 3rem;
      }

      &:last-child {
        margin-left: 3rem;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      > div,
      ul {
        &:first-child {
          margin: 0 0 0 3rem;
        }

        &:last-child {
          margin: 0 3rem 0 0;
        }
      }

      > .service-brief_images-wrapper {
        > .service-brief__image1-container {
          align-self: flex-start;
        }
        > .service-brief__image2-container {
          align-self: flex-end;
        }
      }
    }

    .service-brief_images-wrapper {
      margin: 0;
      display: flex;
      flex-direction: column;

      .service-brief__image1-container {
        display: block;
        width: 263px;
        height: 292px;
        align-self: flex-end;

        > img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }

      .service-brief__image2-container {
        width: 458px;
        height: 550px;
        margin-top: -10rem;
        align-self: flex-start;

        > img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }
    }
  }
`;
