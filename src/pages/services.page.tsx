import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ServiceSteps from "../components/services/service-steps.component";
import ServicesCTA from "../components/services/services-cta.component";
import ServicesMapper from "../components/services/services-mapper.component";
import PageIntro from "../components/UI/page-intro.component";
import SEO from "../components/UI/seo.component";

import { servicesList } from "../data/fake-data";

const ServicesPage: React.FC = () => {
  return (
    <ServicesPageStyled>
      <SEO title="Services" />
      <PageIntro
        pageHeading="Building from idea to implementation
        "
        title="Services"
      />
      <ServicesMapper serviceBriefs={servicesList} />
      <ServiceSteps />
      <ServicesCTA />
    </ServicesPageStyled>
  );
};

export default ServicesPage;

const ServicesPageStyled = styled.main`
  padding: 1.75rem 1.75rem 0;
  width: 100%;
  max-width: 1140px;
  margin: 7rem auto 0;
  color: var(--dark);
  position: relative;
  z-index: 0;

  /* desktop */
  @media (min-width: 1080px) {
    padding: 5.25rem 0 0;
  }
`;
