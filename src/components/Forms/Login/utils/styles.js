import { makeStyles } from '@mui/styles';
import cardBg from "assets/card-bg.svg";

export const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    card: {
      height: '85vh',
      width: "25%",
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundImage: `url(${cardBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      boxShadow: "-13px 31px 57px 19px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)!important",
      borderRadius: "20px!important"
    },
    form: {
      flex:1,
      width: '100%',
      display: "flex",
      justifyContent: "center",
      height: "inherit"
    },
    container:{
      gap: '30px',
      top: '100px',
      width: '66% !important',
      display: 'flex',
      position: 'relative',
      flexDirection: 'column !important',
      height: 'fit-content',
    },
    loginBtn:{
      borderRadius: "20px!important",
      '&:focus': {
          boxShadow: '0 0 0 3px rgba(255, 165, 0, 0.5)',
          outline: 'none',
      },
    },
});
  