import React from "react";
import styled from "styled-components";

import StepNumberDecor from "../UI/step-number-decor.component";

const ServiceSteps: React.FC = () => {
  return (
    <ServiceStepsStyled>
      <ul className="services-steps_steps-list">
        <li className="steps-list_item">
          <StepNumberDecor stepNr="01" />
          <h4>Analysis &amp; Idea</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            commodi blanditiis, quas odit cupiditate nulla fugit accusantium.
          </p>
        </li>
        <li className="steps-list_item">
          <StepNumberDecor stepNr="02" />
          <h4>Design &amp; Development</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            suscipit distinctio ad! Maxime, soluta iusto. Laboriosam, vitae.
          </p>
        </li>
        <li className="steps-list_item">
          <StepNumberDecor stepNr="03" />
          <h4>Testing &amp; Launch</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            cum iure temporibus? Obcaecati quibusdam saepe.
          </p>
        </li>
      </ul>
    </ServiceStepsStyled>
  );
};

export default ServiceSteps;

const ServiceStepsStyled = styled.div`
  background-color: var(--dark);
  margin: 0 -9999px;

  .services-steps_steps-list {
    margin: 0 auto;
    padding: 1.75rem;
    width: 100vw;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }

  .steps-list_item {
    padding: 2rem 0;
    position: relative;

    > h4 {
      margin: 3.5rem 0 2.625rem;
      font-size: 1.5rem;
      line-height: 1.2;
    }
    > p {
      font-size: 1.125rem;
      line-height: 1.5;
    }
  }

  /* desktop */
  @media (min-width: 1080px) {
    .services-steps_steps-list {
      padding: 1.75rem 0;
      flex-direction: row;
    }

    .steps-list_item {
      margin-right: 5.5rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
