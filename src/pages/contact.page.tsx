import React from "react";
import styled from "styled-components";

import ContactForm from "../components/contact/contact-form.component";
import OfficesMapper from "../components/contact/offices-mapper.component";
import PageIntro from "../components/UI/page-intro.component";
import SEO from "../components/UI/seo.component";

import { officesList } from "../data/fake-data";

const ContactPage: React.FC = () => {
  return (
    <ContactPageStyled>
      <SEO title="Contact us" />
      <PageIntro
        pageHeading="Let's talk!"
        pageLead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            dolorem numquam harum eaque ratione laboriosam?"
        title="Contact"
      />
      <ContactForm />
      <OfficesMapper offices={officesList} />
    </ContactPageStyled>
  );
};

export default ContactPage;

const ContactPageStyled = styled.main`
  padding: 1.75rem;
  width: 100%;
  max-width: 1140px;
  margin: 7rem auto 0;
  color: var(--dark);
  position: relative;
  z-index: 0;

  /* desktop */
  @media (min-width: 1080px) {
    padding: 5.25rem 0 18rem;
  }
`;
