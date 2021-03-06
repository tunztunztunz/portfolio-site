import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Navbar/Nav';
import Footer from './Footer';
import { Container } from './common/Container';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { Theme } from '../utils/ThemeContext';

const ContentStyles = styled.div`
  padding: 2rem 0;
  line-height: 1.75rem;
`;

const FooterStyles = styled(Footer)``;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <ContentStyles>
      <Theme>
        <Nav />
        <Typography />
        <Container role="main">{children}</Container>
      </Theme>
    </ContentStyles>
    <FooterStyles />
  </>
);

export default Layout;
