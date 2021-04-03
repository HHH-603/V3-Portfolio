import React from "react";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Paragraph from "../components/paragraph";
import SkillListItem from "../components/skill-list-item";
import SkillsContainer from "../components/skills-container";
import SkillsList from "../components/skills-list";
import TertiaryHeader from "../components/tertiary-header";
import ProfilePic from "../images/alaska.jpg";

const About = () => {
  return (
    <Layout>
      <Container>
        <Header>About</Header>
        <img className="image_profile" src={ProfilePic} alt="profile" />
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
                <a
                  className="anchor"
                  href="https://reactjs.org/"
                  target="__blank"
                >
                  React
                </a>
                /
                <a
                  className="anchor"
                  href="https://www.gatsbyjs.com/"
                  target="__blank"
                >
                  Gatsby
                </a>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <a
                  className="anchor"
                  href="https://www.javascript.com/"
                  target="__blank"
                >
                  JavaScript
                </a>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <a
                  className="anchor"
                  href="https://nodejs.org/en/"
                  target="__blank"
                >
                  Node.js
                </a>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <a
                  className="anchor"
                  href="https://www.mongodb.com/"
                  target="__blank"
                >
                  MongoDB
                </a>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <a
                  className="anchor"
                  href="https://www.mysql.com/"
                  target="__blank"
                >
                  MySQL
                </a>
              </SkillListItem>
              <SkillListItem>
                {" "}
                <a
                  className="anchor"
                  href="https://sass-lang.com/"
                  target="__blank"
                >
                  SASS/SCSS
                </a>
              </SkillListItem>
            </SkillsList>
          </SkillsContainer>
        </SkillsContainer>
      </Container>
    </Layout>
  );
};

export default About;
