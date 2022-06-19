import React from 'react';

import Typography from '@mui/material/Typography';

import '../styles/FooterLink.css';

// This component renders an individual footer link
const FooterLink = ({ text, href }) => {
  return (
    <a className='footer-link' href={href}>
      <Typography
        sx={{
          color: '#ffffff',
          fontFamily: 'D-DIN-Med',
          fontSize: '12px',
          paddingX: {
            xs: '7px',
            lg: '21px',
          },
        }}
      >
        {text}
      </Typography>
    </a>
  );
};

export default FooterLink;
