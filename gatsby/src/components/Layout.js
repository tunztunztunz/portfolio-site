import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Navbar/Nav';
import Footer from './Footer';
import { Container } from './common/Container';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const ContentStyles = styled.div`
  padding: 2rem 0;
  line-height: 1.75rem;
`;

const FooterStyles = styled(Footer)``;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <ContentStyles>
      <Nav />
      <Container>{children}</Container>
    </ContentStyles>
    <FooterStyles />
  </>
);

export default Layout;
