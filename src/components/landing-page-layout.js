import React from "react";
import "@fontsource/poppins";
import "../styles/main.scss";

const LandingPageLayout = (props) => {
  return (
    <>
      <div className="layout_landing-page">{props.children}</div>
    </>
  );
};

export default LandingPageLayout;
