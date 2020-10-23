import React from "react";
import styled from "styled-components";

interface PageHeaderProps {
  title: string;
  headerImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerImage }) => {
  return (
    <PageHeaderStyled headerImage={headerImage}>
      <h1>{title}</h1>
    </PageHeaderStyled>
  );
};

export default PageHeader;

const PageHeaderStyled = styled.header<{ headerImage: string }>`
  padding: 0 1.75rem 0;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--blue) url(${({ headerImage }) => headerImage}) no-repeat
    center;
  background-size: cover;

  > h1 {
    color: white;
    font-size: 70px;
    text-align: center;
    line-height: 1.2;
    text-transform: capitalize;

  }
`;
