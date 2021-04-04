import React from "react";
import Navigation from "./navigation";
import "@fontsource/poppins";
import "@fontsource/pacifico";
import "../styles/main.scss";
import Footer from "./footer";
import SEO from "./seo";

const Layout = (props) => {
  return (
    <>
      <SEO />
      <div className="layout">
        <Navigation />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
