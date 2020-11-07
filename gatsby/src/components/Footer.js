import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-top: 1px solid var(--grey);
`;

const Footer = () => <FooterStyles />;

export default Footer;
