import React from "react";
import Resume from "../assets/Hank-Holmes_Resume.pdf";

const Footer = () => {
  return (
    <footer>
      <a
        className="link_footer"
        href="mailto:hholmes726@gmail.com"
        target="__blank"
      >
        Email
      </a>{" "}
      <a
        className="link_footer"
        href="https://www.linkedin.com/in/henryhamiltonholmes/"
        target="__blank"
      >
        LinkedIn
      </a>
      <a
        className="link_footer"
        href="https://github.com/HHH-603"
        target="__blank"
      >
        GitHub
      </a>
      <a className="link_footer" href={Resume} target="__blank">
        Resume
      </a>
    </footer>
  );
};

export default Footer;
