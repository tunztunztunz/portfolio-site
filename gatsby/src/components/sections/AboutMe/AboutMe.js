import React from 'react';
import Img from 'gatsby-image';
import AboutMeStyles from './AboutMeStyles';

const AboutMe = ({ person }) => {
  const githubLink = 'https://github.com/tunztunztunz';
  const bandLink = 'https://raincult.bandcamp.com/album/neon-rodeo';
  const uniPiper =
    'https://www.youtube.com/watch?v=cnVjkE87FDY&ab_channel=TheUnipiper';

  return (
    <section id="about">
      <AboutMeStyles>
        <div
          data-sal="slide-left"
          data-sal-delay="300"
          data-sal-easing="ease-out"
        >
          <Img
            fluid={person.image.asset.fluid}
            alt={person.name}
            className="about-grid"
          />
        </div>
        <div>
          <p data-sal="slide-right" data-sal-delay="400" data-sal-easing="ease">
            Howdy pardner 🤠 ! I’m a web developer based out of{' '}
            <a href={uniPiper} target="_blank" className="mark">
              Portland, Oregon
            </a>
            . In the past year I’ve been learning to build things with{' '}
            <a href={githubLink} target="_blank" className="mark">
              Javascript
            </a>
            . Lately, I’ve been focusing on modern frameworks like React.js,
            Bootstrap, and Styled Components for front-end development. For
            backend development, I’m familiar with Express.js, Mongoose,
            Graphql, and Mongodb. When I’m not coding, I sling guitar riffs in{' '}
            <a href={bandLink} target="_blank" className="mark">
              bands
            </a>{' '}
            and enjoy writing. The current stack of languages/technologies I’m
            familiar with is:
          </p>
          <p
            className="mark"
            data-sal="slide-left"
            data-sal-delay="500"
            data-sal-easing="ease"
          >
            HTML5 CSS3 JAVASCRIPT NODE.JS REACT.JS EXPRESS.JS STYLED-COMPONENTS
            GRAPHQL GATSBY.JS
          </p>
        </div>
      </AboutMeStyles>
    </section>
  );
};
export default AboutMe;
