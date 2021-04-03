import { Link } from "gatsby";
import React from "react";
import LandingPageContainer from "../components/container-landing-page";
import Header from "../components/header";
import LandingPageLayout from "../components/landing-page-layout";
import Paragraph from "../components/paragraph";

const NotFoundPage = () => {
  return (
    <LandingPageLayout>
      <LandingPageContainer>
        <Header>Page Not Found</Header>
        <Paragraph>This is not the page you are looking for.</Paragraph>
        <div className="container_landing-page--links">
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
      </LandingPageContainer>
    </LandingPageLayout>
  );
};

export default NotFoundPage;
