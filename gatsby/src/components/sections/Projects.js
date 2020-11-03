import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Reverse from '../common/Reverse';
import { Button } from '../common/Button'

const HeaderStyles = styled.section`
  text-align: center;
  margin-bottom: 6rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  justify-items: start;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 8rem;
  h1 {
    color: var(--rose);
  }
`;

const SingleProjectStyles = styled.div`
  --columns: 1fr;
  display: grid;
  grid-template-columns: var(--columns);
  gap: 2rem;
  justify-items: center;
  text-align: center;
  @media (min-width: 900px) {
    justify-items: center;
    text-align: left;
    --columns: 1fr 2fr;
  }
  p {
    //font-size: 1.25rem;
    padding: 0 8%;
    margin-bottom: 0;
    text-align: center;
    @media (min-width: 900px) {
      text-align: left;
      padding: 0;
    }
  }
  h2 {
    padding: 0;
    margin: 0;
    display: inline-block;
    top: 0;
  }
  .buttons {
    display: flex;
    justify-content: center;
    Button {
      margin: 0 1rem;
    }
    @media(min-width: 900px) {
      justify-content: start;
    }
  }
  .img-div {
    display: flex;
    flex-direction: column;
  }
  .technology {
    margin-top: 0.5rem;
    align-self: center;
    align-items: end;
    color: var(--rose);
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  .gatsby-image-wrapper {
    margin-top: 0.3rem;
    width: 100%;
    //max-width: 600px;
    @media (min-width: 900px) {
      width: 400px;
      max-height: 269px;
    }
  }
`;

const SingleProject = ({ project }) => (
  <SingleProjectStyles>
    <div className="img-div">
      <Img fluid={project.image.asset.fluid} alt={project.name} />
      <span className="technology">
        react, graphql, styled components, gatsby
      </span>
    </div>
    <div className="project-information">
      <h2>
        <span>{project.name}</span>
      </h2>
      <p>{project.description}</p>
      <br />
      <div className="buttons">
        <Button>Live</Button>
        <Button>Code</Button>
      </div>
    </div>
  </SingleProjectStyles>
);

const Projects = ({ projects }) => {
  console.log('projects');
  return (
    <section id="projects">
      <HeaderStyles>
        <h1 className="header">Projects</h1>
        <p>
          Here are some <Reverse>projects</Reverse> I've been working on
        </p>
      </HeaderStyles>
      <ProjectsGrid>
        {projects.map((project) => (
          <SingleProject project={project} key={project.name} />
        ))}
      </ProjectsGrid>
    </section>
  );
};

export default Projects;
