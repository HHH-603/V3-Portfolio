import React, { Component } from "react";
import Card from "../components/card";
import Container from "../components/container";
import Layout from "../components/layout";
import projects from "../images/projects.json";

class Projects extends Component {
  state = { projects };

  Project = (id) => {
    this.setState({ projects });
  };

  render() {
    return (
      <Layout>
        <Container>
          <h1 className="header">Projects</h1>
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
    );
  }
}

export default Projects;
