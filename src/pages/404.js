import { Link } from "gatsby";
import React from "react";
import LandingPageLayout from "../components/landing-page-layout";

const NotFoundPage = () => {
  return (
    <LandingPageLayout>
      <div className="container-landing-page">
        <h1>Page Not Found</h1>
        <p>This is not the page you are looking for.</p>
      </div>
      <div className="container_landing-page--links">
        <Link className="link" to="#">
          About
        </Link>
        <Link className="link" to="#">
          Projects
        </Link>
        <Link className="link" to="#">
          Contact
        </Link>
      </div>
    </LandingPageLayout>
  );
};

export default NotFoundPage;
