import React from "react";
import styled from "styled-components";

import { ServiceItemBriefInterface } from "../../data/fake-data";

import ServiceBrief from "./service-brief.component";

interface ServicesMapperProps {
  serviceBriefs: ServiceItemBriefInterface[];
}

const ServicesMapper: React.FC<ServicesMapperProps> = ({ serviceBriefs }) => {
  return (
    <ServicesMapperStyled>
      <ul className="services-mapper_services-list">
        {serviceBriefs.map((service) => {
          return <ServiceBrief key={service.id} serviceBrief={service} />;
        })}
      </ul>
    </ServicesMapperStyled>
  );
};

export default ServicesMapper;

const ServicesMapperStyled = styled.div`
  .services-mapper_services-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;