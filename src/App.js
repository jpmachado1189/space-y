import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Slide from './components/Slide';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

/*
This macro emulates the data that would be fetched from the api to generate the slides
They change this data around twice per day
*/
const SLIDECONFIG = [
  {
    id: '0',
    title: 'GLOBALSTAR FM15 MISSION',
    subtitle: 'RECENT LAUNCH',
    btnText: 'REWATCH',
    img: '0',
  },
  {
    id: '1',
    title: 'SARAH-1 MISSION',
    subtitle: 'RECENT LAUNCH',
    btnText: 'REWATCH',
    img: '1',
  },
  {
    id: '2',
    title: 'STARLINK MISSION',
    subtitle: 'RECENT LAUNCH',
    btnText: 'REWATCH',
    img: '2',
  },
  {
    id: '3',
    title: 'STARSHIP UPDATE',
    subtitle: '',
    btnText: 'LEARN MORE',
    img: '3',
  },
  {
    id: '4',
    title: 'STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON',
    subtitle: '',
    btnText: 'LEARN MORE',
    img: '4',
  },
];

function App() {
  //Pre-render the slides

  const renderedSlides = SLIDECONFIG.map(slide => {
    return <Slide key={slide.id} config={slide} />;
  });

  return (
    <React.Fragment>
      <CssBaseline /> {/* Clearing baseline css  */}
      <NavBar />
      <Box>{renderedSlides}</Box>
      <Footer />
    </React.Fragment>
  );
}

export default App;
