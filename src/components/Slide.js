import React from 'react';

import Box from '@mui/material/Box';

import TextBox from './TextBox';
import ScrollArrow from './ScrollArrow';

import '../styles/Slide.css';

// Receives configuration data and fetches the background image from local files
const Slide = ({ config }) => {
  const image = require(`../images/background-${config.img}.webp`);

  return (
    <Box
      className='slide'
      sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: {
          xs: '50%',
          md: '50%',
        },
      }}
    >
      {/* The TextBox component holds the title, subtitle and 
      button and makes them easier to tinker with and move around */}
      <TextBox
        title={config.title}
        subtitle={config.subtitle}
        btnText={config.btnText}
      />

      {/* This component is the animated "scroll me" down arrow at the bottom of each slide */}
      <ScrollArrow len={config.title.length} />
    </Box>
  );
};

export default Slide;
