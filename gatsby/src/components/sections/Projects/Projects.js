import React from 'react';
import Img from 'gatsby-image';
import { Button } from '../../common/Button';
import {
  HeaderStyles,
  ProjectsGrid,
  SingleProjectStyles,
} from './ProjectsStyles';
import { Serializer } from '../../Serializers';

const BlockContent = require('@sanity/block-content-to-react');

const duration = '400';

const SingleProject = ({ project }) => (
  <SingleProjectStyles>
    <div
      className="img-div"
      data-sal="slide-right"
      data-sal-delay="400"
      data-sal-duration={duration}
      data-sal-easing="ease-out-back"
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
        data-sal-delay="500"
        data-sal-duration={duration}
        data-sal-easing="ease-out-back"
        className="project-header"
      >
        <span>{project.name}</span>
      </h2>
      <div
        data-sal="slide-left"
        data-sal-delay="600"
        data-sal-duration={duration}
        data-sal-easing="ease-out-back"
        className="project-description"
      >
        <BlockContent
          blocks={project._rawDescription}
          serializers={Serializer}
        />
      </div>
      <br />
      <div
        className="buttons"
        data-sal="slide-left"
        data-sal-delay="700"
        data-sal-duration={duration}
        data-sal-easing="ease-out-back"
      >
        <Button>
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            Live
          </a>
        </Button>
        <Button>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
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
        <h1
          className="header"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration={duration}
          data-sal-easing="ease-in"
        >
          Projects
        </h1>
        <p
          data-sal="slide-up"
          data-sal-delay="500"
          data-sal-duration={duration}
          data-sal-easing="ease-in"
        >
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
