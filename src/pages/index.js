import React from "react";
import LandingPageLayout from "../components/landing-page-layout";
import Layout from "../components/layout";

const Home = () => {
  return (
    <LandingPageLayout>
      <div className="container_landing-page">
        <h1>Greetings!</h1>
        <p>Welcome to my portfolio!</p>
      </div>
    </LandingPageLayout>
  );
};

export default Home;
