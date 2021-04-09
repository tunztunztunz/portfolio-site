import React, { useState } from 'react';
import Img from 'gatsby-image';
import { VscFoldDown as Down } from 'react-icons/vsc';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useSound from 'use-sound';
import { AiFillHtml5 as HTML } from 'react-icons/ai';
import { FaCss3Alt as CSS } from 'react-icons/fa';
import {
  SiJavascript as JS,
  SiGraphql as Graphql,
  SiGatsby as GATSBY,
  SiStyledComponents as STYLED,
  SiTypescript as Typescript,
} from 'react-icons/si';
import { DiNodejs as Node, DiReact as REACT } from 'react-icons/di';

import AboutMeStyles from './AboutMeStyles';
import lowPop from '../../../assets/sounds/lowPop.mp3';
import highPop from '../../../assets/sounds/highPop.mp3';

const AboutMe = ({ person }) => {
  const [hasNavigated, setHasNavigated] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [playActive] = useSound(lowPop, { volume: 0.25 });
  const [playOn] = useSound(highPop, { volume: 0.25 });
  const githubLink = 'https://github.com/tunztunztunz';
  const bandLink = 'https://raincult.bandcamp.com/album/neon-rodeo';
  const uniPiper =
    'https://www.youtube.com/watch?v=cnVjkE87FDY&ab_channel=TheUnipiper';
  const duration = '1000';

  const iconAnimations = {
    'data-sal': 'slide-left',
    'data-sal-delay': '900',
    'data-sal-duration': { duration },
    'data-sal-easing': 'ease-out-back',
  };

  return (
    <section id="about">
      <AboutMeStyles hasNavigated={hasNavigated} animate={animate}>
        <div
          data-sal="slide-left"
          data-sal-duration={duration}
          data-sal-delay="200"
          data-sal-easing="ease-out-back"
        >
          <Img
            fluid={person.image.asset.fluid}
            alt={person.name}
            className="image"
          />
        </div>
        <div
          data-sal="slide-right"
          data-sal-delay="500"
          data-sal-duration={duration}
          data-sal-easing="ease-out-back"
        >
          <div>
            <p>
              Howdy pardner 🤠 ! I’m a web developer available for full-time
              employment. I'm based out of{' '}
              <a
                href={uniPiper}
                target="_blank"
                className="mark"
                rel="noreferrer"
              >
                Portland, Oregon
              </a>{' '}
              and enjoy building things for the web. I mainly work with modern
              frameworks like React.js, Gatsby.js, Bootstrap, and Styled
              Components for front-end development. For backend development, I’m
              familiar with Express.js, Mongoose, Graphql, and Mongodb. When I’m
              not coding, I sling guitar riffs in{' '}
              <a
                href={bandLink}
                target="_blank"
                className="mark"
                rel="noreferrer"
              >
                bands
              </a>{' '}
              and enjoy writing.
            </p>
          </div>

          <div className="icons">
            <span className="icon">
              <HTML
                {...iconAnimations}
                data-sal-delay="950"
                aria-label="HTML5 Icon"
              />
            </span>
            <span className="icon">
              <CSS
                {...iconAnimations}
                data-sal-delay="900"
                aria-label="CSS3 Icon"
              />
            </span>
            <span className="icon">
              <JS
                {...iconAnimations}
                data-sal-delay="850"
                aria-label="Javascript Icon"
              />
            </span>
            <span className="icon">
              <Node
                {...iconAnimations}
                data-sal-duration="800"
                aria-label="Node.js Icon"
              />
            </span>
            <span className="icon">
              <REACT
                {...iconAnimations}
                data-sal-delay="750"
                aria-label="React Icon"
              />
            </span>
            <span className="icon">
              <Graphql
                {...iconAnimations}
                data-sal-delay="700"
                aria-label="Graphql Icon"
              />
            </span>
            <span className="icon">
              <STYLED
                {...iconAnimations}
                data-sal-delay="650"
                aria-label="Styled Components Icon"
              />
            </span>
            <span className="icon">
              <GATSBY
                {...iconAnimations}
                data-sal-delay="600"
                aria-label="Gatsby.js Icon"
              />
            </span>
            <span className="icon">
              <Typescript
                {...iconAnimations}
                data-sal-delay="500"
                aria-label="Typescript Icon"
              />
            </span>
          </div>
          <AnchorLink
            href="#projects"
            offset="800"
            aria-label="Navigate To Projects"
            aria-hidden="false"
            // For accessibility, I think.
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                playActive();
                setAnimate(true);
                setHasNavigated(true);
              }
            }}
          >
            <div
              data-sal="zoom-in"
              data-sal-delay="1000"
              data-sal-duration={duration}
              data-sal-easing="ease-out-back"
            >
              <Down
                className="down-arrow"
                onMouseDown={playActive}
                onMouseUp={playOn}
                onClick={() => {
                  setAnimate(true);
                  setHasNavigated(true);
                }}
              />
            </div>
          </AnchorLink>
        </div>
      </AboutMeStyles>
    </section>
  );
};
export default AboutMe;
