import React from "react";
import styled from "styled-components";

interface PageIntroDecorProps {
  title: string;
}

const PageIntroDecor: React.FC<PageIntroDecorProps> = ({ title }) => {
  return (
    <PageIntroDecorStyled
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="155"
      viewBox="0 0 400 101"
      className="page-intro-decor absolute"
    >
      <text
        fill="#FFF"
        fillOpacity="0"
        fillRule="evenodd"
        stroke="#e5e5e5"
        strokeWidth=".6"
        fontFamily="Swansea"
        fontSize="90"
        fontWeight="700"
        transform="translate(-994 -151)"
      >
        <tspan x="990" y="250">
          {title}
        </tspan>
      </text>
    </PageIntroDecorStyled>
  );
};

export default PageIntroDecor;

const PageIntroDecorStyled = styled.svg`
  position: absolute;
  top: 3.5rem;
  left: 40rem;

  /* desktop */
  @media (min-width: 1080px) {
    top: 7rem;
  }
`;
