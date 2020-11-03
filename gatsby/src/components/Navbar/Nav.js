import React, { useState } from 'react';
import { Link } from 'gatsby';
import NavLinks from './NavLinks';
import { Hamburger, Name, Navbox, Toggle, Wrapper } from './NavStyles';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log(navbarOpen);
  return (
    <Wrapper>
      <Name as={Link} to="/">
        Dustin Simensen
      </Name>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLinks navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavLinks navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        </Navbox>
      )}
    </Wrapper>
  );
};

export default Nav;
