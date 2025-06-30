import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: 'hsl(172, 67%, 45%)',
    },
    background: {
      default: 'hsl(189, 47%, 97%)',
      paper: 'hsl(183, 100%, 15%)',
    },
    text: {
      primary: 'hsl(183, 100%, 15%)',
      secondary: 'hsl(186, 14%, 43%)',
    },
    grey: {
      50: 'hsl(189, 47%, 97%)',
      200: 'hsl(185, 41%, 84%)',
      400: 'hsl(184, 14%, 56%)',
      500: 'hsl(186, 14%, 43%)',
    },
  },
  typography: {
    fontFamily: '"Space Mono", monospace',
    fontWeightBold: 700,
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1.5rem',
    },
  },
});

export default theme;
