import React from "react";
import Layout from "../components/layout";
import Resume from "../assets/Hank-Holmes_Resume.pdf";
import Container from "../components/container";
import Header from "../components/header";
import SecondaryHeader from "../components/secondary-header";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Layout>
        <Container>
          <Header>Contact</Header>
          <SecondaryHeader>
            I'm always open to new opportunities, and would love to hear
            from you if you think I'd be a good fit for your team!
          </SecondaryHeader>
          <a
            className="link_contact"
            href="mailto:hholmes726@gmail.com"
            target="__blank"
          >
            Email
          </a>
          <a
            className="link_contact"
            href="https://www.linkedin.com/in/henryhamiltonholmes/"
            target="__blank"
          >
            LinkedIn
          </a>
          <a
            className="link_contact"
            href="https://github.com/HHH-603"
            target="__blank"
          >
            GitHub
          </a>
          <a className="link_contact" href={Resume} target="__blank">
            Resume
          </a>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
