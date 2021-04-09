import React, { useState } from 'react';
import { Link } from 'gatsby';
import useSound from 'use-sound';
import NavLinks from './NavLinks';
import { Hamburger, Name, Navbox, Toggle, Wrapper } from './NavStyles';
import { ThemeContext } from '../../utils/ThemeContext';
import lowPop from '../../assets/sounds/lowPop.mp3';
import highPop from '../../assets/sounds/highPop.mp3';
import sun from '../../assets/sounds/sun.mp3';

const Nav = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [playActive] = useSound(lowPop, { volume: 0.25 });
  const [playOn] = useSound(highPop, { volume: 0.25 });
  const [playSparkle] = useSound(sun, { volume: 0.25 });
  return (
    <Wrapper mode={colorMode}>
      <header role="banner">
        <Name as={Link} to="/">
          Dustin Simensen
        </Name>
      </header>
      <div className="nav-selection">
        <span
          className="dark-mode-switch"
          role="button"
          tabIndex={0}
          onClick={() => {
            setColorMode(colorMode === 'light' ? 'dark' : 'light');
          }}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              playSparkle();
              setColorMode(colorMode === 'light' ? 'dark' : 'light');
            }
          }}
          onMouseDown={playSparkle}
        >
          {colorMode ? (colorMode === 'light' ? '☀️' : '🌝') : ''}
        </span>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox role="navigation">
            <NavLinks
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}
              playActive={playActive}
              playOn={playOn}
            />
          </Navbox>
        ) : (
          <Navbox role="navigation" open>
            <NavLinks
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}
              playActive={playActive}
              playOn={playOn}
            />
          </Navbox>
        )}
      </div>
    </Wrapper>
  );
};

export default Nav;
