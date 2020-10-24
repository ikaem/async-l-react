import React from "react";
import styled from "styled-components";

interface ServiceDescriptionProps {
  lead: string;
  description: string;
  features: string[];
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  lead,
  description,
  features,
}) => {
  return (
    <ServiceDescriptionStyled className="service-description">
      <h2 className="service-description_title">Description</h2>
      <div className="service-description_description-container">
        <p className="description_container_lead">{lead}</p>

        <div className="description_container_service-info">
          <p className="service-info_description">{description}</p>
          <ul className="service-info_features-list">
            {features.map((feature) => (
              <li key={feature} className="service-info_feature">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ServiceDescriptionStyled>
  );
};

export default ServiceDescription;

const ServiceDescriptionStyled = styled.section`
  padding: 1.75rem;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  > h2 {
    color: var(--blue);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 1.75rem;
  }

  .service-description_description-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.75rem 0;

    > p {
      font-size: 26px;
      font-weight: 700;
      line-height: 1.3;
    }
  }

  .description_container_service-info {
    > p {
      font-size: 1.25rem;
      line-height: 1.5;
      color: var(--darkGray);
      margin-bottom: 3rem;
    }

    > ul {
      > li {
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        line-height: 300%;
        font-weight: 400;

        ::before {
          content: "–";
          margin-right: 1.25rem;
          color: var(--blue);
        }
      }
    }
  }

  /* desktop */
  @media (min-width: 1080px) {
    padding: 7.25rem 6rem 18.875rem;

    .service-description_description-container {
      grid-template-columns: 1fr 1fr;
      gap: 0;

      > p {
        padding-right: 7.5rem;
      }
    }
  }
`;
