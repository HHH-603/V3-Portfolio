import { Link } from "gatsby";
import React from "react";
import LandingPageLayout from "../components/landing-page-layout";

const Home = () => {
  return (
    <LandingPageLayout>
      <div className="container_landing-page">
        <h1 className="header">Greetings!</h1>
        <p>
          My name is{" "}
          <a
            className="anchor"
            href="https://www.linkedin.com/in/henryhamiltonholmes/"
            target="__blank"
          >
            Hank
          </a>{" "}
          , and I'm a Full Stack Web Developer based in{" "}
          <a
            className="anchor"
            href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
            target="__blank"
          >
            Charlotte, NC
          </a>
          . I love to create thoughtfully-designed web apps and websites, solve
          complex problems, and learn new things every day.
        </p>
        <div className="container_landing-page--links">
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="#">
            Projects
          </Link>
          <Link className="link" to="#">
            Contact
          </Link>
        </div>
      </div>
    </LandingPageLayout>
  );
};

export default Home;
