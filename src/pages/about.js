import React from "react";
import { Helmet } from "react-helmet";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import SkillListItem from "../components/skill-list-item";
import SkillsContainer from "../components/skills-container";
import SkillsList from "../components/skills-list";
import TertiaryHeader from "../components/tertiary-header";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="uft-8" />
        <meta
          name="description"
          content="My name is Hank, and I'm a Front End Web Developer based in Charlotte, NC."
        />
        <html lang="en" amp />
        <title>About</title>
      </Helmet>
      <Container>
        <Header>About</Header>
        <StaticImage
          className="image_profile"
          src="../images/alaska.jpg"
          alt="profile"
          formats={["AUTO", "WEBP", "AVIF"]}
          loading="eager"
          placeholder="blurred"
        />
        <Paragraph>
          I'm originally from{" "}
          <a
            className="anchor"
            href="https://en.wikipedia.org/wiki/Dunbarton,_New_Hampshire"
            target="__blank"
          >
            Dunbarton, NH
          </a>
          , and have several years of SaaS sales and campaign management
          experience. I recently graduated from{" "}
          <a
            className="anchor"
            href="https://en.wikipedia.org/wiki/University_of_North_Carolina_at_Charlotte"
            target="__blank"
          >
            UNC Charlotte
          </a>
          's Full Stack Web Development program and previously worked at{" "}
          <a
            className="anchor"
            href="https://www.everyaction.com/"
            target="__blank"
          >
            EveryAction
          </a>
          &nbsp;in Washington, DC, where I helped equip small and mid-sized
          nonprofits with customized cloud CRM solutions tailored to their
          unique fundraising, advocacy, and reporting goals.
        </Paragraph>
        <SkillsContainer>
          <TertiaryHeader>
            <strong>
              Some languages and technologies that I've recently been working
              with are:
            </strong>
          </TertiaryHeader>
          <SkillsContainer>
            <SkillsList>
              <SkillListItem>
                {" "}
                <p>React/Gatsby</p>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <p>JavaScript</p>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <p>Node.js</p>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <p>MongoDB</p>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <p>MySQL</p>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <p>SASS</p>
              </SkillListItem>
            </SkillsList>
          </SkillsContainer>
        </SkillsContainer>
      </Container>
    </Layout>
  );
};

export default About;
