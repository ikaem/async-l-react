import React from "react";
import styled from "styled-components";

interface StepNumberDecorProps {
  stepNr: string;
}

const StepNumberDecor: React.FC<StepNumberDecorProps> = ({ stepNr }) => {
  return (
    <StepNumberDecorStyled>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400px"
        viewBox="0 0 400 102"
        className="page-intro-decor absolute"
      >
        <text
          fill="#FFF"
          fillOpacity="0"
          fillRule="evenodd"
          stroke="#e5e5e5"
          strokeWidth=".6"
          fontFamily="Swansea"
          fontSize="130"
          fontWeight="700"
          transform="translate(-994 -151)"
        >
          <tspan x="990" y="250">
            {stepNr}
          </tspan>
        </text>
      </svg>
    </StepNumberDecorStyled>
  );
};

export default StepNumberDecor;

const StepNumberDecorStyled = styled.div`
  position: absolute;
  
  left: 4px;
`;
