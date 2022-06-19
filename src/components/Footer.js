import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FooterLink from './FooterLink';

import '../styles/Footer.css';

/* 
Similarly to other macros in this code, this holds the data 
that would be fetched from an API regarding the footer links
*/
const FOOTERLINKS = [
  'TWITTER',
  'YOUTUBE',
  'INSTAGRAM',
  'FLICKR',
  'LINKEDIN',
  'PRIVACY POLICY',
  'SUPPLIERS',
];

// Since this is a boilerplate one reference can be passed to every link item
const DEMOLINK =
  'https://staticg.sportskeeda.com/editor/2022/05/282d1-16520985648588-1920.jpg';

const Footer = () => {
  // Pre render the footer items
  const renderedLinks = FOOTERLINKS.map(link => {
    return <FooterLink key={link} text={link} href={DEMOLINK} />;
  });

  return (
    <Box
      className='footer'
      sx={{
        paddingLeft: {
          lg: '20px',
        },
      }}
    >
      <Typography
        sx={{
          color: '#979797',
          fontFamily: 'D-DIN-Med',
          fontSize: '12px',
          textAlign: 'center',
          marginRight: '24px',
          width: {
            xs: '100%',
            lg: 'auto',
          },
        }}
      >
        SPACEX © 2022
      </Typography>
      {renderedLinks}
    </Box>
  );
};

export default Footer;
