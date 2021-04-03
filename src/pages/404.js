import { Link } from "gatsby";
import React from "react";
import LandingPageContainer from "../components/container-landing-page";
import Header from "../components/header";
import LandingPageLayout from "../components/landing-page-layout";

const NotFoundPage = () => {
  return (
    <LandingPageLayout>
      <LandingPageContainer>
        <Header>Page Not Found</Header>
        <p>This is not the page you are looking for.</p>
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
