import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import '../styles/NavItem.css';

// Renders an individual navbar link
const NavItem = ({ text, href }) => {
  return (
    <Box
      className='nav-link'
      sx={{
        marginLeft: {
          lg: '15px',
        },
        marginRight: {
          lg: '0px',
          xl: '10px',
        },
      }}
    >
      <a className='nav-link-anchor' href={href}>
        <Typography
          className='nav-text'
          sx={{
            color: '#ffffff',
            fontFamily: 'D-DIN-Med2',
            fontSize: '13px',
          }}
        >
          {text}
        </Typography>
      </a>
    </Box>
  );
};

export default NavItem;
