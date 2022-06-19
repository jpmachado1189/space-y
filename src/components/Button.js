import React from 'react';

import Box from '@mui/material/Box';

import '../styles/Button.css';

// A simple button with an animation to be rendered in each textbox
const Button = ({ btnText }) => {
  return (
    <Box className='btn-landing'>
      <Box className='btn-landing-text'>{btnText}</Box>
    </Box>
  );
};

export default Button;
