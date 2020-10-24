import React from "react";
import styled from "styled-components";

import { OfficeItemInterface } from "../../data/fake-data";

import OfficeItem from "./office-item.component";

interface OfficesMapperProps {
  offices: OfficeItemInterface[];
}

const OfficesMapper: React.FC<OfficesMapperProps> = ({ offices }) => {
  return (
    <OfficesMapperStyled>
      <ul>
        {offices.map((office) => (
          <OfficeItem {...office} key={office.id} />
        ))}
      </ul>
    </OfficesMapperStyled>
  );
};

export default OfficesMapper;

const OfficesMapperStyled = styled.div`
  > ul {
    display: flex;
    flex-direction: column;
  }

  /* tablet */
  @media (min-width: 780px) {
    > ul {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
