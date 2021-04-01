import styled from 'styled-components';

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin-top: 3rem;
  transition: all 3s ease-out;
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
  .icons {
    color: var(--black);
    font-size: 36px;
    padding: 1rem;
    text-align: center;
    svg {
      margin: 1rem 1rem;
    }
    .icon {
      transition: all 0.25s;
    }
    .icon:hover {
      color: var(--rose);
      font-size: 48px;
    }
    @media screen and (max-width: 800px) {
      text-align: left;
    }
    @media screen and (max-width: 600px) {
      svg {
        margin: 1rem 2rem;
      }
    }
    @media screen and (max-width: 365px) {
      svg {
        margin: 1rem 1.25rem;
      }
    }
  }
  .down-arrow {
    display: none;
    margin: 5rem auto;
    font-size: 50px;
    transition: font-size 0.25s;
  }
  .down-arrow:hover {
    font-size: 68px;
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
    height: ${(props) => (props.hasNavigated ? '500px' : '100vh')};
    padding: ${(props) => (props.hasNavigated ? '15px' : '0 15px')};
    transition: all 0.75s ease-in-out;
    /* The SVG button */
    .down-arrow {
      display: block;
      visibility: ${(props) => (props.hasNavigated ? 'hidden' : 'visible')};
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
