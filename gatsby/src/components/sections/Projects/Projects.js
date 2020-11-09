import React from 'react';
import Img from 'gatsby-image';
import Reverse from '../../common/Reverse';
import { Button } from '../../common/Button';
import { HeaderStyles, ProjectsGrid, SingleProjectStyles } from './ProjectsStyles'


const SingleProject = ({ project }) => (
  <SingleProjectStyles>
    <div className="img-div">
      <Img fluid={project.image.asset.fluid} alt={project.name} />
      <span className="technology">
        {project.technology.map((p, i) => (
          <span key={i}>{p}, </span>
        ))}
      </span>
    </div>
    <div className="project-information">
      <h2>
        <span>{project.name}</span>
      </h2>
      <p>{project.description}</p>
      <br />
      <div className="buttons">
        <Button>
          <a href={project.liveLink} target="_blank">
            Live
          </a>
        </Button>
        <Button>
          <a href={project.githubLink} target="_blank">
            Github
          </a>
        </Button>
      </div>
    </div>
  </SingleProjectStyles>
);

const Projects = ({ projects }) => {
  const githubLink = 'https://github.com/tunztunztunz';
  return (
    <section id="projects">
      <HeaderStyles>
        <h1 className="header">Projects</h1>
        <p>
          Here are some{' '}
          <span>
            <a href={githubLink} className="mark">
              projects
            </a>
          </span>{' '}
          I've worked on
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
