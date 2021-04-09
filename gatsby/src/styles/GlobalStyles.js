import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --shadow: 1px 0px 4px 1px rgba(0,0,0,0.2);
  }
  html {
    height: 100%;
    background: var(--color-background);
    transition: background-color 0.25s linear;
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
    overflow-x: hidden;
  }
  img {
    max-width: 100%;
  }
  .image {
    box-shadow: var(--shadow);
  }
`;

export default GlobalStyles;
