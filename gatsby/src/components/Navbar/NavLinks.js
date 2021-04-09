import React from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useSound from 'use-sound';
import lowPop from '../../assets/sounds/lowPop.mp3';
import highPop from '../../assets/sounds/highPop.mp3';

const Wrapper = styled.div`
  display: inline-block;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  a {
    font-size: 1.25rem;
    text-decoration: none;
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

const Nav = ({ navbarOpen, setNavbarOpen, playOn, playActive }) => {
  const toggleNav = () => {
    if (navbarOpen) {
      setNavbarOpen(!navbarOpen);
    }
  };
  return (
    <Wrapper>
      <AnchorLink
        href="#about"
        offset="0"
        onClick={() => toggleNav()}
        onKeyDown={(event) => {
          if (event.key === 'Enter') playActive();
        }}
        onMouseDown={playActive}
        onMouseUp={playOn}
      >
        About
      </AnchorLink>
      <AnchorLink
        href="#projects"
        offset="25"
        onClick={() => toggleNav()}
        onKeyDown={(event) => {
          if (event.key === 'Enter') playActive();
        }}
        onMouseDown={playActive}
        onMouseUp={playOn}
      >
        Projects
      </AnchorLink>
      <AnchorLink
        href="#contact"
        offset="25"
        onClick={() => toggleNav()}
        onKeyDown={(event) => {
          if (event.key === 'Enter') playActive();
        }}
        onMouseDown={playActive}
        onMouseUp={playOn}
      >
        Contact
      </AnchorLink>
    </Wrapper>
  );
};

export default Nav;
