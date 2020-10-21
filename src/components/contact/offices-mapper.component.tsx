import React from "react";
import styled from "styled-components";

import { officesList } from "../../data/fake-data";

import OfficeItem from "./office-item.component";

const OfficesMapper: React.FC = () => {
  return (
    <OfficesMapperStyled>
      <ul>
        {officesList.map((office) => (
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
