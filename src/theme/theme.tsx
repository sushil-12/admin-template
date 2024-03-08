import { createTheme } from "@mui/material";
import palette from "./palette";

const _theme = createTheme()
export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiTypography: {
      fontFamily: 'Inter, sans-serif',
      styleOverrides: {
        labelLarge: {
          fontStyle: 'normal',
          fontWeight: '700',
          color: palette.success.light,
          // wordWrap: 'break-word',
          [_theme.breakpoints.up('xs')]: {
            fontSize: '20px'
          },
          [_theme.breakpoints.up('sm')]: {
            fontSize: '24px'
          },
          [_theme.breakpoints.up('md')]: {
            fontSize: '24px'
          },
          [_theme.breakpoints.up('lg')]: {
            fontSize: '30px'
          }
        },
      }
    },
  }
})