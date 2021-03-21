import React, { useState } from 'react';
import Img from 'gatsby-image';
import { VscFoldDown as Down } from 'react-icons/vsc';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AboutMeStyles from './AboutMeStyles';

const AboutMe = ({ person }) => {
  const [hasNavigated, setHasNavigated] = useState(false);
  const [animate, setAnimate] = useState(false);
  const githubLink = 'https://github.com/tunztunztunz';
  const bandLink = 'https://raincult.bandcamp.com/album/neon-rodeo';
  const uniPiper =
    'https://www.youtube.com/watch?v=cnVjkE87FDY&ab_channel=TheUnipiper';
  const duration = '1000';

  return (
    <section id="about">
      <AboutMeStyles hasNavigated={hasNavigated} animate={animate}>
        <div
          data-sal="slide-left"
          data-sal-duration={duration}
          data-sal-delay="200"
          data-sal-easing="ease-out-back"
        >
          <Img fluid={person.image.asset.fluid} alt={person.name} />
        </div>
        <div>
          <p
            data-sal="slide-right"
            data-sal-delay="500"
            data-sal-duration={duration}
            data-sal-easing="ease-out-back"
          >
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
            Next.js, Bootstrap, and Styled Components for front-end development.
            For backend development, I’m familiar with Express.js, Mongoose,
            Graphql, and Mongodb. When I’m not coding, I sling guitar riffs in{' '}
            <a
              href={bandLink}
              target="_blank"
              className="mark"
              rel="noreferrer"
            >
              bands
            </a>{' '}
            and enjoy writing. The current stack of languages/technologies I’m
            familiar with is:
          </p>
          <p
            className="mark"
            data-sal="slide-left"
            data-sal-delay="700"
            data-sal-duration={duration}
            data-sal-easing="ease-out-back"
          >
            HTML5 CSS3 JAVASCRIPT NODE.JS REACT EXPRESS STYLED-COMPONENTS
            GRAPHQL GATSBY NEXT
          </p>
          <AnchorLink href="#projects" offset="700">
            <Down
              data-sal="zoom-in"
              data-sal-delay="1000"
              data-sal-duration={duration}
              data-sal-easing="ease-out-back"
              onClick={() => {
                setAnimate(true);
                setHasNavigated(true);
              }}
            />
          </AnchorLink>
        </div>
      </AboutMeStyles>
    </section>
  );
};
export default AboutMe;
