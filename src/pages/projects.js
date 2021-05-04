import React, { Component } from "react";
import Card from "../components/card";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";
import Seo from "../components/seo";
import projects from "../images/projects.json";

class Projects extends Component {
  state = { projects };

  Project = () => {
    this.setState({ projects });
  };

  render() {
    return (
      <>
        <Seo title="Projects" />
        <Layout>
          <Container>
            <Header>Projects</Header>
            {this.state.projects.map((project) => (
              <Card
                id={project.id}
                key={project.id}
                title={project.title}
                role={project.role}
                description={project.description}
                environment={project.environment}
                summary-one={project["summary-one"]}
                summary-two={project["summary-two"]}
                deployed={project.deployed}
                repository={project.repository}
              />
            ))}
          </Container>
        </Layout>
      </>
    );
  }
}

export default Projects;
