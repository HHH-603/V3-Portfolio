import React from "react";
import Navigation from "./navigation";
import "@fontsource/poppins";
import "@fontsource/pacifico";
import "../styles/main.scss";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <Navigation />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
