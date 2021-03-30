import React from "react";
import Navigation from "./navigation";
import "../styles/main.scss";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <div className="layout">{props.children}</div>
    </>
  );
};

export default Layout;
