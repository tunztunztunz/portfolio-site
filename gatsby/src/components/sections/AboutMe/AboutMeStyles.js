import styled from 'styled-components';

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 3rem;
  transition: all 3s ease-out;
  svg {
    display: none;
    margin: 5rem auto;
    font-size: 50px;
  }
  ul {
    text-align: left;
    @media screen and (min-width: 800px) {
      text-align: center;
    }
    padding-left: 0;
    list-style: none;
    li {
      display: inline-block;
      margin: 0 0.5rem;
    }
    li:nth-child(even) {
      font-size: 1.25rem;
    }
  }
  p {
    display: inline;
  }
  .loop {
    margin: 0 0.5rem;
    font-size: 1rem;
  }
  .gatsby-image-wrapper {
    margin-bottom: 3rem;
    align-self: start;
    width: 50%;
    min-height: 280px;
    min-width: 280px;
  }

  @media screen and (min-width: 768px) and (min-height: 750px) {
    /* The about me section */
    position: relative;
    height: ${(props) => (props.hasNavigated ? '450px' : '100vh')};
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
`;

export default AboutMeStyles;
