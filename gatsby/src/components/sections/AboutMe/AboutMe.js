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
} from 'react-icons/si';
import { DiNodejs as Node, DiReact as REACT } from 'react-icons/di';
import { BsTriangleFill as Next } from 'react-icons/bs';

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
  const technologies = [
    'HTML5',
    'CSS3',
    'JAVASCRIPT',
    'NODE.JS',
    'REACT',
    'EXPRESS',
    'GRAPHQL',
    'GATSBY',
    'NEXT',
  ];
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
        <div>
          <div
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-duration={duration}
            data-sal-easing="ease-out-back"
          >
            <p>
              Howdy pardner 🤠 ! I’m a web developer based out of{' '}
              <a
                href={uniPiper}
                target="_blank"
                className="mark"
                rel="noreferrer"
              >
                Portland, Oregon
              </a>
              . I enjoy building things with{' '}
              <a
                href={githubLink}
                target="_blank"
                className="mark"
                rel="noreferrer"
              >
                Javascript
              </a>
              . I mainly work with modern frameworks like React.js, Gatsby.js,
              Next.js, Bootstrap, and Styled Components for front-end
              development. For backend development, I’m familiar with
              Express.js, Mongoose, Graphql, and Mongodb. When I’m not coding, I
              sling guitar riffs in{' '}
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
              <HTML {...iconAnimations} data-sal-delay="950" />
            </span>
            <span className="icon">
              <CSS {...iconAnimations} data-sal-delay="900" />
            </span>
            <span className="icon">
              <JS {...iconAnimations} data-sal-delay="850" />
            </span>
            <span className="icon">
              <Node {...iconAnimations} data-sal-duration="800" />
            </span>
            <span className="icon">
              <REACT {...iconAnimations} data-sal-delay="750" />
            </span>
            <span className="icon">
              <Graphql {...iconAnimations} data-sal-delay="700" />
            </span>
            <span className="icon">
              <STYLED {...iconAnimations} data-sal-delay="650" />
            </span>
            <span className="icon">
              <GATSBY {...iconAnimations} data-sal-delay="600" />
            </span>
            <span className="icon">
              <Next {...iconAnimations} data-sal-delay="550" />
            </span>
          </div>
          <AnchorLink href="#projects" offset="800">
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
