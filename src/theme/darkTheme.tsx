import { createTheme } from "@mui/material";
import palette from "./palette";

const _darkTheme = createTheme()
export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    components: {
        MuiTypography: {
            fontFamily: 'Inter, sans-serif',
            styleOverrides: {
                labelLarge: {
                    fontStyle: 'normal',
                    fontWeight: '700',
                    color: palette.success.dark,
                    // wordWrap: 'break-word',
                    [_darkTheme.breakpoints.up('xs')]: {
                        fontSize: '20px'
                    },
                    [_darkTheme.breakpoints.up('sm')]: {
                        fontSize: '24px'
                    },
                    [_darkTheme.breakpoints.up('md')]: {
                        fontSize: '24px'
                    },
                    [_darkTheme.breakpoints.up('lg')]: {
                        fontSize: '30px'
                    }
                },
            }
        },
    }
});