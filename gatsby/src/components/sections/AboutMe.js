import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import reverseString from '../../utils/reverseString';

const AboutMeStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  text-align: center;
  margin-top: 5rem;
  .technologies {
    word-spacing: 0.25rem;
  }
  .about-grid {
    display: grid;
    grid-template-rows: auto;
    gap: .5rem;
  }
  .gatsby-image-wrapper {
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
            <span
              className="mark"
              onFocus={reverse}
              onBlur={reverse}
              onMouseEnter={reverse}
              onMouseLeave={reverse}
            >
              Portland, Oregon
            </span>
            . I've been learning to program and build things with{' '}
            <span
              className="mark"
              onFocus={reverse}
              onBlur={reverse}
              onMouseEnter={reverse}
              onMouseLeave={reverse}
            >
              Javascript
            </span>{' '}
            and loving it. When I'm not doing web development I enjoy{' '}
            <span
              className="mark"
              onFocus={reverse}
              onBlur={reverse}
              onMouseEnter={reverse}
              onMouseLeave={reverse}
            >
              playing in bands
            </span>
            ,{' '}
            <span
              className="mark"
              onFocus={reverse}
              onBlur={reverse}
              onMouseEnter={reverse}
              onMouseLeave={reverse}
            >
              writing{' '}
            </span>
            , and{' '}
            <span
              className="mark"
              onFocus={reverse}
              onBlur={reverse}
              onMouseEnter={reverse}
              onMouseLeave={reverse}
            >
              hiking{' '}
            </span>
            .
          </p>
          <p>The current stack of languages/technologies I'm familiar with</p>
          <h4 className="mark technologies">
            HTML5 CSS3 JAVASCRIPT REACT STYLED COMPONENTS GRAPHQL NODE.JS GATSBY
          </h4>
        </div>
      </AboutMeStyles>
    </section>
  );
};
export default AboutMe;
