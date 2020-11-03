import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Wrapper = styled.div`
  display: inline-block;
  //margin: 0 1vw;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  a {
    font-size: 1.25rem;
    text-decoration: none;
    color: var(--black);
    margin-right: 1rem;
    white-space: nowrap;
    transition: all 200ms ease-in;
    position: relative;

    &:last-child {
      margin-right: unset;
    }
    &:hover {
      color: var(--rose);
    }
    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0;
      content: '.';
      color: transparent;
      background: goldenrod;
      height: 1px;
      transition: all 0.4s ease-in;
    }
    @media (max-width: 800px) {
      display: flex;
      padding: 20px 0;
      font-size: 1.5rem;
      z-index: 6;
    }
  }
`;

const Nav = ({ navbarOpen, setNavbarOpen }) => {
  const toggleNav = () => {
    if (navbarOpen) {
      setNavbarOpen(!navbarOpen);
    }
  };
  return (
    <Wrapper>
      <AnchorLink href="#about" offset="25" onClick={() => toggleNav()}>
        About
      </AnchorLink>
      <AnchorLink href="#projects" offset="25" onClick={() => toggleNav()}>
        Projects
      </AnchorLink>
      <AnchorLink href="#contact" offset="25" onClick={() => toggleNav()}>
        Contact
      </AnchorLink>
    </Wrapper>
  );
};

export default Nav;
