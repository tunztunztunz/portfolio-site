import { createGlobalStyle } from 'styled-components';

import openSans from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: openSans;
    src: url(${openSans});
    font-display: swap;
  }
  html {
    font-family: openSans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
    svg {
      color: var(--color-text);
    } ;
      
  }
  p, li {
    letter-spacing: 0.5px;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }
  a {
    color: var(--color-primary);
    text-decoration-color: var(--color-primary);
  }
  .mark {
    color: var(--color-primary);
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
