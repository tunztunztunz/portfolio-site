import styled from 'styled-components';

const AboutMeStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  text-align: left;
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
    min-height: 280px;
    min-width: 280px;
  }
`;

export default AboutMeStyles;
