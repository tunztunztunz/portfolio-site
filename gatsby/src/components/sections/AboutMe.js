import React from 'react';
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
  .technologies {
    word-spacing: 0.25rem;
    font-size: 3rem;
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
    max-height: 400px;
  }
`;

const AboutMe = ({ person }) => {
  const reverse = reverseString;
  return (
    <section id="about">
      <AboutMeStyles>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <div className="about-grid">
          <p>
            I'm a web developer from based out of{' '}
            <Reverse>Portland, Oregon</Reverse>. I've been learning to program
            and build things with <Reverse>Javascript</Reverse> and loving it.
            When I'm not doing web development I enjoy{' '}
            <Reverse>playing in bands</Reverse>, <Reverse>writing </Reverse>,
            and <Reverse>hiking </Reverse>. The current stack of
            languages/technologies I'm familiar with:
          </p>
          <Reverse className="mark technologies">
            HTML5 CSS3 JAVASCRIPT REACT STYLED COMPONENTS GRAPHQL NODE.JS GATSBY
          </Reverse>
        </div>
      </AboutMeStyles>
    </section>
  );
};
export default AboutMe;
