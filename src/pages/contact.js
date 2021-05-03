import React from "react";
import Layout from "../components/layout";
import Resume from "../assets/Hank-Holmes_Resume.pdf";
import Container from "../components/container";
import Header from "../components/header";
import SecondaryHeader from "../components/secondary-header";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="uft-8" />
        <meta
          name="description"
          content="My name is Hank, and I'm a Front End Web Developer based in Charlotte, NC."
        />
        <html lang="en" amp />
        <title>Contact</title>
      </Helmet>
      <Container>
        <Header>Contact</Header>
        <SecondaryHeader>
          I'm currently looking for new opportunities, and would love to hear
          from you if I can be of service!
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
  );
};

export default Contact;
