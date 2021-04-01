import React, { useState } from 'react';
import { Link } from 'gatsby';
import Typing from 'react-typing-animation';
import NavLinks from './NavLinks';
import { Hamburger, Name, Navbox, Toggle, Wrapper } from './NavStyles';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <Wrapper>
      <header role="banner">
        <Name as={Link} to="/">
          <Typing>
            {' '}
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={1} delay={1000} />
            <span>Dostin Siminson</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={15} delay={2000} />
            <Typing.Delay ms={1500} />
            <span>Dustin Simensen</span>
            <Typing.Delay ms={1500} />
          </Typing>
        </Name>
      </header>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox role="navigation">
          <NavLinks navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </Navbox>
      ) : (
        <Navbox role="navigation" open>
          <NavLinks navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </Navbox>
      )}
    </Wrapper>
  );
};

export default Nav;
