import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ServicesCTA: React.FC = () => {
  return (
    <ServicesCTAStyled className="services-cta">
      <div className="services-cta_content">
        <h2>Interested in discussing a project?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          pariatur amet aperiam assumenda.
        </p>
        <Link className="" to="#">
          Get in touch
        </Link>
      </div>
    </ServicesCTAStyled>
  );
};

export default ServicesCTA;

const ServicesCTAStyled = styled.section`
  background-color: var(--blue);
  margin: 0 -9999px;

  .services-cta_content {
    margin: 0 auto;
    padding: 3.5rem 1.75rem;
    width: 100vw;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    > h2 {
      margin-bottom: 1.25rem;
      font-size: 2.875rem;
      line-height: 1.26;
      text-align: center;
    }
    > p {
      margin-bottom: 2.5rem;
      font-size: 1.25rem;
      line-height: 1.5;
      text-align: center;
    }
    > a {
      font-size: 1.125rem;
      font-weight: 700;
      text-align: center;
      padding: 1.25rem 3.625rem;
      color: var(--dark);
      background-color: white;
    }
  }

  /* desktop */
  @media (min-width: 1080px) {
    padding: 7.625rem 0 8.125rem;
  }
`;
