import React from "react";
import styled from "styled-components";

import ContactForm from "../components/contact/contact-form.component";
import OfficesMapper from "../components/contact/offices-mapper.component";
import PageIntro from "../components/UI/page-intro.component";
import SEO from "../components/UI/seo.component";

const ContactPage: React.FC = () => {
  return (
    <ContactFormStyled>
      <SEO title="Contact us" />
      <PageIntro
        pageHeading="Let's talk!"
        pageLead="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            dolorem numquam harum eaque ratione laboriosam?"
        title="Contact"
      />
      <ContactForm />
      <OfficesMapper />
    </ContactFormStyled>
  );
};

export default ContactPage;

const ContactFormStyled = styled.main`
  padding: 1.75rem;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  color: var(--dark);

  /* desktop */
  @media (min-width: 1080px) {
    padding: 5.25rem 7rem 18rem;
  }
`;
