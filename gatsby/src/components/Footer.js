import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-top: 1px solid var(--grey);
`;

const Footer = () => {
  return (
    <FooterStyles>
      <p>&copy; Dustin Simensen {new Date().getFullYear()}</p>
    </FooterStyles>
  );
};

export default Footer;
