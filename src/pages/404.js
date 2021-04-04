import { Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import LandingPageContainer from "../components/container-landing-page";
import Header from "../components/header";
import LandingPageLinksContainer from "../components/landing-page-links-container";
import Paragraph from "../components/paragraph";

const NotFoundPage = () => {
  return (
    <div className="layout_404">
      <Helmet>
        <meta charSet="uft-8" />
        <meta
          name="description"
          content="My name is Hank, and I'm a Full Stack Web Developer based in Charlotte, NC."
        />
        <title>Page Not Found</title>
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
    </div>
  );
};

export default NotFoundPage;
