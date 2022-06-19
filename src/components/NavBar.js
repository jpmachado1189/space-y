import React, { useState, useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import NavItem from './NavItem';
import DrawerOverlay from './DrawerOverlay';

import Logo from '../images/spacex-logo.png';

import '../styles/NavBar.css';

// Macro for the links to be displayed in the navbar, emulates a server request
const NAVLINKS = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT',
  'RIDESHARE',
  'STARLINK',
];

// This item is rendered differently, for this reason the text is separated
const SHOPTEXT = 'SHOP';

// Where every link points to, since this is only boilerplate and nothing is being fetched yet
const HREF =
  'https://staticg.sportskeeda.com/editor/2022/05/282d1-16520985648588-1920.jpg';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detecting if the resolution is under 1200 pixels wide and setting state for it
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Detecting screen resizes to adjust the state
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  // Prerender the navbar links by mapping the macro
  const renderedLinks = NAVLINKS.map(link => {
    return <NavItem key={link} text={link} href={HREF} />;
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='transparent'
        elevation={0}
        sx={{
          position: 'fixed',
          left: {
            sx: '0px',
            md: '0%',
          },
          top: {
            xs: '0px',
            lg: '19px',
          },
        }}
      >
        {/* There are two toolbars, this one renders on >=1200 wide resolution */}
        {!isMobile && (
          <Toolbar>
            <a className='spacex-logo' href='https://www.google.com'>
              <img
                src={Logo}
                alt='logo-missing'
                height='25.5px'
                title='SpaceX Logo'
              />
            </a>
            {renderedLinks}
            {/* Links were rendered, this typography component 
            is only here to create empty space */}
            <Typography
              sx={{
                flexGrow: {
                  lg: 0.7,
                  xl: 0.92,
                },
              }}
            />

            {/* The final link to be rendered is the shop, far to the right*/}
            <NavItem text={SHOPTEXT} href={HREF} />
          </Toolbar>
        )}

        {/* Toolbar version for resolutions <1200 pixels wide 
        Navlinks go to the side drawer and the logo is centered*/}
        {isMobile && (
          <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
            <a className='spacex-logo-mobile' href='https://www.google.com'>
              <img
                src={Logo}
                alt='logo-missing'
                height='18px'
                title='SpaceX Logo'
              />
            </a>
          </Toolbar>
        )}
        {/* 
        This "DrawerOverlay" component is the side drawer that opens from the right 
        When in lower resolutions the navbar links are rendered there,
        that data and state are passed through the props to make that possible 
        */}
        <DrawerOverlay navlinks={NAVLINKS} isMobile={isMobile} />
      </AppBar>
    </Box>
  );
};

export default NavBar;
