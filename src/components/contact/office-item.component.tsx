import React from "react";
import styled from "styled-components";

interface OfficeItemProps {
  location: string;
  street: string;
  email: string;
  phone: string;
}

const OfficeItem: React.FC<OfficeItemProps> = ({
  location,
  street,
  email,
  phone,
}) => {
  return (
    <OfficeItemStyled>
      <h3>{location}</h3>
      <p>
        {street}
        <br />
        {email}
        <br />
        {phone}
      </p>
    </OfficeItemStyled>
  );
};

export default OfficeItem;

const OfficeItemStyled = styled.li`
  margin-bottom: 1.75rem;
  padding: 4rem;
  background-color: var(--ligthGray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :last-child {
    margin-bottom: 0;
    background-color: var(--dark);
    color: white;

    > p {
      color: var(--ligthGray);
    }
  }

  > h3 {
    font-size: 1.5rem;
    line-height: 32px;
    margin-bottom: 1.5rem;
  }

  > p {
    font-size: 1.125rem;
    line-height: 1.67;
    color: var(--darkGray);
  }

  /* tablet */
  @media (min-width: 780px) {
    margin-bottom: 0;
    margin-right: 1.75rem;
    padding: 2rem;
    flex: 1;

    :last-child {
      margin-right: 0;
    }
  }

  /* desktop */
  @media (min-width: 1080px) {
    padding: 3rem;
  }
`;
