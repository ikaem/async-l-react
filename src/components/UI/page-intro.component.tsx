import React from "react";
import styled from "styled-components";

import PageIntroDecor from "./page-intro-decor.component";

interface PageIntroProps {
  pageHeading?: string;
  pageLead?: string;
  title: string;
}

const PageIntro: React.FC<PageIntroProps> = ({
  pageHeading,
  pageLead,
  title,
}) => {
  return (
    <PageIntroStyled>
      <h1 className="page-intro_heading">{pageHeading || title}</h1>
      {pageLead && <p className="page-intro_page-lead">{pageLead}</p>}
      <div className="page-intro_decor-wrapper">
        {/* <PageIntroDecor title={title} /> */}
      </div>
    </PageIntroStyled>
  );
};

export default PageIntro;

const PageIntroStyled = styled.div`
  margin-bottom: 4rem;

  .page-intro_heading {
    font-size: 2.5rem;
    line-height: 120%;
  }

  .page-intro_page-lead {
    font-size: 1.25rem;
    line-height: 30px;
    color: var(--darkGray);
  }

  /* tablet */
  @media (min-width: 780px) {
    width: 60%;
  }

  /* desktop */
  @media (min-width: 1080px) {
    margin-bottom: 6.875rem;
    padding-left: 6.5rem;

    .page-intro_heading {
      font-size: 4.375rem;
    }
  }
`;
