import { createGlobalStyle } from 'styled-components';

import openSans from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: openSans;
    src: url(${openSans});
  }
  html {
    font-family: openSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }
  p {
    transition: all 200ms ease-in-out;
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    //text-decoration-skip-ink: none;
  }
  .mark {
    color: var(--rose);
  }
  .center {
    text-align: center;
  }
   .header {
    font-size: 3rem;
    letter-spacing: 0.5px;
  }
  
`;

export default Typography;
