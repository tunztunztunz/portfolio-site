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
`;

const FooterStyles = styled(Footer)`
  // for sticky footer
  flex-shrink: 0;
`;

const Layout = ({ children }) => {
  return (
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
};

export default Layout;
