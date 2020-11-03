import { createGlobalStyle } from 'styled-components';

import openSans from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';
import openSansBold from '../assets/fonts/Open_Sans/OpenSans-Bold.ttf';
import gentiumBookBasic from '../assets/fonts/Gentium_Book_Basic/GentiumBookBasic-Regular.ttf';
import gentiumBookBasicBold from '../assets/fonts/Gentium_Book_Basic/GentiumBookBasic-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: gentiumBookBasic;
    src: url(${gentiumBookBasic});
  }
  html {
    font-family: FrenchFries, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    text-decoration-skip-ink: none;
  }
  .mark {
    color: var(--rose);
  }
  .center {
    text-align: center;
  }
  .tilt {
    transform: rotate(-2deg);
  }
   .header {
    text-decoration: underline;
  }
`;

export default Typography;
