import { Link } from "gatsby";
import React from "react";
import LandingPageContainer from "../components/container-landing-page";
import LandingPageLayout from "../components/landing-page-layout";

const NotFoundPage = () => {
  return (
    <LandingPageLayout>
      <LandingPageContainer>
        <h1 className="header">Page Not Found</h1>
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
