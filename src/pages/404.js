import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import LandingPageContainer from "../components/container-landing-page";
import Header from "../components/header";
import LandingPageLayout from "../components/landing-page-layout";
import LandingPageLinksContainer from "../components/landing-page-links-container";
import Paragraph from "../components/paragraph";

const NotFoundPage = () => {
  return (
    <LandingPageLayout>
      <Helmet>
        <meta charSet="uft-8" />
        <meta
          name="description"
          content="My name is Hank, and I'm a Front End Web Developer based in Charlotte, NC."
        />
        <html lang="en" amp />
        <title>404</title>
      </Helmet>
      <LandingPageContainer>
        <Header>Page Not Found</Header>
        <Paragraph>This is not the page you are looking for.</Paragraph>
        <LandingPageLinksContainer>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </LandingPageLinksContainer>
      </LandingPageContainer>
    </LandingPageLayout>
  );
};

export default NotFoundPage;
