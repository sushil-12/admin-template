import { Button, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import { useState } from 'react';
import { darkTheme } from './theme/darkTheme';
import { theme } from './theme/theme';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Typography variant='labelLarge'>
        TEST
      </Typography>
      <Button onClick={toggleDarkMode} sx={{ background: "red" }}>
        Change
      </Button>
      <Typography variant='labelLarge'>{darkMode ? 'Dark Mode' : 'Light Mode'}</Typography>
    </ThemeProvider>

  )
}

export default App
