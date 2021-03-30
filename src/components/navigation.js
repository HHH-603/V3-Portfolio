import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <Link className="link_navigation" to="#">
          About
        </Link>
        <Link className="link_navigation" to="#">
          Projects
        </Link>
        <Link className="link_navigation" to="#">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
