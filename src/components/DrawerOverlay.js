import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Twirl } from 'hamburger-react'; // Externally obtained from https://hamburger-react.netlify.app/ , makes the icon part easy

import '../styles/DrawerOverlay.css';

// The side the drawer pops in from
const anchor = 'right';

// This file has two components, the sidebar itself and the overlay
// I decided to keep them together since they are so intertwined they can be treated as one

// This is the sidebar that pops from the side
const SideDrawer = ({ navlinks, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false); // State keeps track if it's open or not

  const items = ['MISSION', 'LAUNCHES', 'CAREERS', 'UPDATES', 'SHOP']; // The sidebar links to be displayed
  // If resolution is small, they navbar links are concatenated
  const itemsToRender = isMobile ? navlinks.concat(items) : items;

  // Function to toggle the drawer and update the state
  const toggleDrawer = open => e => {
    setIsOpen(open);
  };

  // Returns the menu inside the drawer
  // Has more inline style (not only computed values) because of how nested some components are in MUI
  const list = () => (
    <Box
      sx={{
        width: {
          xs: '290px',
          lg: '350px',
        },
        marginTop: {
          xs: '41px',
          lg: '66px',
        },
      }}
      role='presentation'
      onClick={toggleDrawer(false)}
    >
      <List>
        {itemsToRender.map((text, index) => (
          <Box key={index}>
            <ListItem disablePadding button>
              <ListItemText
                className='drawer-item'
                sx={{
                  marginRight: {
                    xs: '21px',
                    lg: '50px',
                  },
                }}
                primary={text}
                primaryTypographyProps={{
                  sx: {
                    lineHeight: '33px',
                    fontSize: '15px',
                    fontFamily: 'D-DIN-Reg',
                    textAlign: 'end',
                    color: '#ffffff',
                  },
                }}
              />
            </ListItem>
            <Divider
              sx={{
                backgroundColor: '#ffffff',
                marginRight: {
                  xs: '21px',
                  lg: '50px',
                },
                marginLeft: '50px',
                cursor: 'pointer',
                height: '1px',
                opacity: '20%',
              }}
            />
          </Box>
        ))}
      </List>
    </Box>
  );

  // Returns the sidebar itself with all its components
  // It has the burger icon, the drawer and the list menu in it
  // MUI does a lot of the work under the hood here
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          width: '50px',
          marginLeft: {
            xs: '87vw',
            sm: '90vw',
            lg: '95.5vw',
          },
          marginTop: {
            xs: '2px',
            lg: '26.5px',
          },
          pointerEvents: 'auto',
        }}
      >
        <Twirl
          direction='right'
          color='#ffffff'
          size='18'
          distance='sm'
          toggled={isOpen}
          toggle={isOpen ? toggleDrawer(false) : toggleDrawer(true)}
        />
      </Box>

      <Drawer
        sx={{ zIndex: '100' }}
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#000000',
          },
        }}
        transitionDuration={650}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
};

// The component that's actually exported
// It contains the overlay AND the side drawer
// The portal renders it on another place in the DOM to make it stay above everything else in the root
const DrawerOverlay = ({ navlinks, isMobile }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <SideDrawer navlinks={navlinks} isMobile={isMobile} />,
        document.getElementById('drawer-root')
      )}
    </React.Fragment>
  );
};

export default DrawerOverlay;
