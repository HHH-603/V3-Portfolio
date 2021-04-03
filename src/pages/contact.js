import React from "react";
import Layout from "../components/layout";
import Resume from "../assets/Hank-Holmes_Resume.pdf";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <h1 className="header">Contact</h1>
        <h2 className="secondary-header_contact">
          I'm currently looking for new opportunities, and would love to hear
          from you if I can be of service!
        </h2>
        <a
          className="link_contact"
          href="mailto:hholmes726@gmail.com"
          target="__blank"
        >
          Email
        </a>
        <a
          className="link_contact"
          href="https://www.linkedin.com/in/henryhamiltonholmes/"
          target="__blank"
        >
          LinkedIn
        </a>
        <a
          className="link_contact"
          href="https://github.com/HHH-603"
          target="__blank"
        >
          GitHub
        </a>
        <a className="link_contact" href={Resume} target="__blank">
          Resume
        </a>
      </div>
    </Layout>
  );
};

export default Contact;
