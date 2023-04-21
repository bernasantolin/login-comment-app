import { createTheme } from '@mui/material';
export const theme = createTheme({
    palette:{
        primary:{
            main:'#F27830',
            contrastText:'#FFF'
        },
        secondary:{
            main:'#FFF',
            contrastText:'#000'
        },
    },
    typography: {
        fontFamily: [
            'Open Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
        allVariants: {
          textTransform: "none",
        },
        "MuiButton-text":{
            fontWeight:"bold",
        },
        button: {
            fontWeight:700
        },
    },
    components:{
        MuiInputLabel:{
            styleOverrides:{
                asterisk:{
                    color:"#d32f2f"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:focus': {
                    outline: 'none', 
                    },
                },
            },
        },
    }
});