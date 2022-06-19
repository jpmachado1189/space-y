import React, { useState, useEffect, useRef } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from './Button';

import '../styles/TextBox.css';

const TextBox = ({ title, subtitle, btnText }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  // Managing the intersection observer to trigger the fade in animation as the user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  // Calculate how far from the top the textbox component should be because of line breaks
  const calcTopPercentage = (title, subtitle) => {
    const titleLen = title.length;
    const subtitleLen = subtitle.length;
    let percentage = 0;

    if (titleLen > 43) {
      percentage = 56;
    } else if (titleLen > 20) {
      percentage = 63;
    } else {
      percentage = 66;
    }

    if (subtitleLen === 0) {
      percentage += 4;
    }

    return `${percentage}%`;
  };

  // This component is just a box with the title, subtitle and button on it, data comes from props
  return (
    <Box
      sx={{
        top: calcTopPercentage(title, subtitle),
        marginLeft: {
          xs: '8%',
          lg: '15.8%',
        },
        maxWidth: {
          xs: '323px',
          sm: '510px',
        },
      }}
      className={`textbox fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      <Typography
        className='subtitle shadow'
        variant='div'
        component='h4'
        sx={{
          fontSize: {
            xs: '16px',
            sm: '18.5px',
          },
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        className='title shadow'
        variant='div'
        component='h2'
        sx={{
          fontSize: {
            xs: '36px',
            sm: '48px',
          },
        }}
      >
        {title}
      </Typography>
      <Button btnText={btnText} />
    </Box>
  );
};

export default TextBox;
