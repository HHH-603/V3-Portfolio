import React from "react";
import Navigation from "./navigation";
import "@fontsource/poppins";
import "@fontsource/pacifico";
import "../styles/main.scss";

const Layout = (props) => {
  return (
    <>
      <div className="layout">
        <Navigation />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
