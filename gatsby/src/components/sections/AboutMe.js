import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import reverseString from '../../utils/reverseString';
import Reverse from '../common/Reverse';

const AboutMeStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  text-align: center;
  margin-top: 5rem;
  a {
    text-decoration: none;
  }
  .technologies {
    word-spacing: 0.25rem;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .about-grid {
    display: grid;
    grid-template-rows: auto;
    gap: 0.5rem;
  }
  .gatsby-image-wrapper {
    margin-bottom: 5rem;
    align-self: start;
    width: 50%;
    min-height: 250px;
  }
`;

const AboutMe = ({ person }) => {
  const githubLink = 'https://github.com/tunztunztunz';
  const bandLink = 'https://raincult.bandcamp.com/album/neon-rodeo';

  const reverse = reverseString;
  return (
    <section id="about">
      <AboutMeStyles>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <div className="about-grid">
          <p>
            Howdy pardner🤠 ! I'm a web developer from based out of{' '}
            <Reverse>Portland, Oregon</Reverse>. In the past year I've been
            learning to program and build things with{' '}
            <a href={githubLink} target="_blank">
              <Reverse>Javascript</Reverse>
            </a>
            . Right now, I've been focusing on learning modern frameworks like
            <span className="mark"> React.js</span>,{' '}
            <span className="mark">Express.js</span>, and various CSS
            frameworks, such as <span className="mark">Styled Components</span>{' '}
            and <span className="mark">Bootstrap</span>. When I'm not coding, I
            sling guitar riffs in{' '}
            <Reverse>
              <a href={bandLink} target="_blank" className="mark">
                bands
              </a>
            </Reverse>{' '}
            and enjoy <Reverse>writing</Reverse>. The current stack of
            languages/technologies I'm familiar with:
          </p>
          <Reverse className="mark technologies">
            HTML5 CSS3 JAVASCRIPT NODE.JS REACT.JS EXPRESS.JS STYLED-COMPONENTS
            GRAPHQL GATSBY.JS
          </Reverse>
        </div>
      </AboutMeStyles>
    </section>
  );
};
export default AboutMe;
