import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --rose: #A05C7B;
    //--black: #181818;
  }
  html {
    height: 100%;
    color: var(--black);
    background: var(--white);
    line-height: 1.75rem;
    font-family: 'Open Sans', sans-serif;
  }
  // This and height: 100% in html tag are to get sticky footer
  body {
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }
  body, html {
    width: 100%;
    overflow-x: hidden;
  }
  img {
    max-width: 100%;
  }
    .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }
`;

export default GlobalStyles;
