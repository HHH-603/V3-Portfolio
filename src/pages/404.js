import { Link } from "gatsby";
import React from "react";
import LandingPageContainer from "../components/container-landing-page";
import Header from "../components/header";
import LandingPageLayout from "../components/landing-page-layout";
import LandingPageLinksContainer from "../components/landing-page-links-container";
import Paragraph from "../components/paragraph";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <>
      <SEO title="404" />
      <LandingPageLayout>
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
    </>
  );
};

export default NotFoundPage;
