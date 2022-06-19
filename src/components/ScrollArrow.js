import React from 'react';

import Box from '@mui/material/Box';
import ArrowIcon from '../images/down-arrow.png';

import '../styles/ScrollArrow.css';

// Calculate how far from the bottom it should be since title line breaks affect this distance
const ScrollArrow = ({ len }) => {
  const calcTopPercentage = len => {
    if (len > 43) {
      return '65%';
    } else if (len > 20) {
      return '69%';
    } else {
      return '73%';
    }
  };

  //This animated scrolling arrow only appears on larger resolutions */
  return (
    <Box
      className='scroll-arrow'
      sx={{
        display: {
          xs: 'none',
          lg: 'block',
        },
        top: calcTopPercentage(len),
      }}
    >
      <img src={ArrowIcon} alt='arrow-icon-missing' height='30px' />
    </Box>
  );
};

export default ScrollArrow;
