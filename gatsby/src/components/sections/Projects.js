import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ReverseString from '../../utils/reverseString';

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
  .technology {
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
    <Img fluid={project.image.asset.fluid} alt={project.name} />
    <div className="project-information">
      <h2>
        <span>{project.name}</span>
      </h2>
      <p>{project.description}</p>
      <span className="technology">
        react, graphql, styled components, gatsby
      </span>
      <br />
      <button>Live</button>
      <button>Code</button>
    </div>
  </SingleProjectStyles>
);

const Projects = ({ projects }) => {
  console.log('projects');
  return (
    <section id="projects">
      <HeaderStyles>
        <h1 className="mark underline">Projects</h1>
        <h3>
          Some of my{' '}
          <span
            className="mark"
            onFocus={ReverseString}
            onBlur={ReverseString}
            onMouseEnter={ReverseString}
            onMouseLeave={ReverseString}
          >
            work
          </span>
        </h3>
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
