import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import ReverseString from '../../utils/reverseString';

const LandingStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 8fr;
  justify-items: center;
  text-align: left;
  margin-top: 5rem;
  h1 {
    font-weight: 800;
    letter-spacing: 0.25rem;
  }

  
  .cursor {
    color: var(--white);
  }
`;

const Landing = ({ person }) => (
  <LandingStyles>

    <div />
  </LandingStyles>
);
export default Landing;
