import { Link } from "gatsby";
import React from "react";
import LandingPageContainer from "../components/container-landing-page";
import Header from "../components/header";
import LandingPageLayout from "../components/landing-page-layout";

var greeting = () => {
  let today = new Date();
  let hoursNow = today.getHours();

  if (hoursNow > 18) {
    return "Good evening!";
  } else if (hoursNow > 12) {
    return "Good afternoon!";
  } else if (hoursNow > 0) {
    return "Good morning!";
  } else {
    return "Wow! Thank you for visiting my portfolio so late at night!";
  }
};

const Home = () => {
  return (
    <LandingPageLayout>
      <LandingPageContainer>
        <Header>{greeting()}</Header>
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
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
      </LandingPageContainer>
    </LandingPageLayout>
  );
};

export default Home;
