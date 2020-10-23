import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { servicesList } from "../data/fake-data";

import SEO from "../components/UI/seo.component";
import PageHeader from "../components/UI/page-header.component";
import ServiceDescription from "../components/service/service-description.component";
import ServiceWorksMapper from "../components/service/service-works-mapper.component";
import OtherServicesNav from "../components/service/other-services-nav.component";

const ServicePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const service = servicesList.find((service) => service.id === id);
  if (!service) return <h1>No such service</h1>;

  const otherServices = servicesList
    .filter((service) => service.id !== id)
    .map((service) => ({
      id: service.id,
      backgroundImage: service.images[0],
      title: service.title,
    }));

  return (
    <ServicePageStyled>
      <SEO title={service.title} />
      <PageHeader headerImage={service.images[0]} title={service.title} />

      <ServiceDescription
        lead={service.lead}
        description={service.description}
        features={service.features}
      />

      <ServiceWorksMapper works={service.work} />

      <OtherServicesNav otherServices={otherServices} />
    </ServicePageStyled>
  );
};

export default ServicePage;

const ServicePageStyled = styled.main`
  width: 100%;
  color: var(--dark);
  position: relative;
  z-index: 0;
`;
