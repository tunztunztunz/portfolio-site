import styled from 'styled-components';

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 3rem;
  transition: all 3s ease-out;

  height: 100%;
  a {
    text-decoration: none;
  }
  svg {
    display: none;
    margin: 5rem auto;
    font-size: 50px;
  }
  .technologies {
    word-spacing: 0.25rem;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .gatsby-image-wrapper {
    margin-bottom: 3rem;
    align-self: start;
    width: 50%;
    min-height: 280px;
    min-width: 280px;
  }

  @media screen and (min-width: 768px) and (min-height: 850px) {
    /* The about me section */
    height: 100vh;
    position: relative;
    max-height: ${(props) => (props.hasNavigated ? '55vh' : '100vh')};
    padding: ${(props) => (props.hasNavigated ? '15px' : '0 15px')};
    transition: all 0.75s ease-in-out;
    /* The SVG button */
    svg {
      display: block;
      visibility: ${(props) => (props.hasNavigated ? 'hidden' : 'visible')};
      transition: all 600ms ease-out;
      animation-name: ${(props) => (props.animate ? 'shrink' : 'none')};
      animation-duration: 600ms;
      animation-iteration-count: initial;
      animation-timing-function: linear;
      @keyframes shrink {
        from {
          visibility: visible;
          width: 80px;
        }
        to {
          visibility: hidden;
          width: 0px;
        }
      }
    }
  }
  @media screen and (min-width: 1440px) and (min-height: 850px) {
    max-height: ${(props) =>
      props.hasNavigated ? 'clamp(600px, 60vh, 600px)' : '100vh'};
  }
`;

export default AboutMeStyles;
