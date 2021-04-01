import React, { useState } from 'react';
import Img from 'gatsby-image';
import { useMediaQuery } from 'react-responsive';
import {
  VscCode as Code,
  VscLinkExternal as Link,
  VscDeviceCameraVideo as Video,
} from 'react-icons/vsc';
import styled from 'styled-components';
import ModalVideo from 'react-modal-video';
import { Button } from '../../common/Button';
import {
  HeaderStyles,
  ProjectsGrid,
  SingleProjectStyles,
} from './ProjectsStyles';
import { Serializer } from '../../Serializers';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss';

const BlockContent = require('@sanity/block-content-to-react');

const StyledIcon = styled.span`
  font-size: 24px;
  margin: 0 1rem;
`;

const duration = '400';

const SingleProject = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(project.image.asset.fluid);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipOn, setTooltipOn] = useState(false);

  const openVideo = () => {
    if (project.videoId !== null) {
      setIsOpen(true);
    } else {
      setTooltipOn(true);
      setTimeout(() => {
        setTooltipOn(false);
      }, 3000);
    }
  };
  const notMobile = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      <SingleProjectStyles hovered={isHovered} tooltipOn={tooltipOn}>
        {console.log(project.videoId)}
        <ModalVideo
          channel="vimeo"
          autoplay
          isOpen={isOpen}
          videoId={project.videoId}
          onClose={() => setIsOpen(false)}
        />
        <div
          className="img-div"
          data-sal="slide-right"
          data-sal-delay="400"
          data-sal-duration={duration}
          data-sal-easing="ease-out-back"
        >
          <div
            onMouseEnter={() => {
              if (project?.gif?.asset?.fluid?.src !== undefined) {
                setIsHovered(true);
                setCurrentImage(project.gif.asset.fluid);
              }
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setCurrentImage(project.image.asset.fluid);
            }}
          >
            <Img
              fluid={currentImage}
              alt={project.name}
              className={` ${isHovered ? 'hovered' : ''} image`}
            />
          </div>
          <span className="technology">
            {project.technology.map((p, i) => (
              <span key={i}>{p}, </span>
            ))}
          </span>
        </div>
        <div className="project-information">
          <h3
            data-sal="slide-left"
            data-sal-delay="500"
            data-sal-duration={duration}
            data-sal-easing="ease-out-back"
            className="project-header"
          >
            <span>{project.name}</span>
          </h3>

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
            {/* mobile buttons */}
            {notMobile && (
              <>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <Button>Live</Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <Button>Github</Button>
                </a>
                {project.videoId && (
                  <Button openVideo={openVideo}>
                    <div style={{ position: 'relative' }}>
                      Video
                      <span className="tooltip">
                        This project doesn't have a video yet.
                      </span>
                    </div>
                  </Button>
                )}
              </>
            )}
            {!notMobile && (
              <>
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <StyledIcon>
                    <Link />
                  </StyledIcon>
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <StyledIcon>
                    <Code />
                  </StyledIcon>
                </a>
                {project.videoId && (
                  <StyledIcon>
                    <div style={{ position: 'relative' }}>
                      <Video onClick={() => openVideo()} />
                    </div>
                  </StyledIcon>
                )}
              </>
            )}
          </div>
        </div>
      </SingleProjectStyles>
    </>
  );
};

const Projects = ({ projects }) => {
  const githubLink = 'https://github.com/tunztunztunz';
  return (
    <section id="projects">
      <HeaderStyles>
        <h2
          className="header"
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-duration={duration}
          data-sal-easing="ease-in"
        >
          Projects
        </h2>
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
