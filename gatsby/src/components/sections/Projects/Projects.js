import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import Reverse from '../../common/Reverse';
import { Button } from '../../common/Button';
import {
  HeaderStyles,
  ProjectsGrid,
  SingleProjectStyles,
} from './ProjectsStyles';

const SingleProject = ({ project }) => {
  console.log('stay');
  return (
    <SingleProjectStyles>
      <div
        className="img-div"
        data-sal="slide-right"
        data-sal-delay="500"
        data-sal-easing="ease-out"
      >
        <Img fluid={project.image.asset.fluid} alt={project.name} />
        <span className="technology">
          {project.technology.map((p, i) => (
            <span key={i}>{p}, </span>
          ))}
        </span>
      </div>
      <div className="project-information">
        <h2
          data-sal="slide-left"
          data-sal-delay="550"
          data-sal-easing="ease-out"
        >
          <span>{project.name}</span>
        </h2>
        <p
          data-sal="slide-left"
          data-sal-delay="600"
          data-sal-easing="ease-out"
        >
          {project.description}
        </p>
        <br />
        <div
          className="buttons"
          data-sal="slide-left"
          data-sal-delay="600"
          data-sal-easing="ease-out"
        >
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
};

const Projects = ({ projects }) => {
  const githubLink = 'https://github.com/tunztunztunz';
  return (
    <section id="projects">
      <HeaderStyles>
        <h1
          className="header"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease-out"
        >
          Projects
        </h1>
        <p data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out">
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
