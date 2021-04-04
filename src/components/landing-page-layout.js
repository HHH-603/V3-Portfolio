import React from "react";
import "@fontsource/poppins";
import "../styles/main.scss";
import SEO from "./seo";

const LandingPageLayout = (props) => {
  return (
    <>
      <SEO />
      <div className="layout_landing-page">{props.children}</div>
    </>
  );
};

export default LandingPageLayout;
