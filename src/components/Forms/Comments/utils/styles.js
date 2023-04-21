import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    comment:{
        background: "#dfdfdf",
        height: "auto",
        borderRadius: "10px",
        padding: "20px",
    },
    commentHeadLine:{
      backgroundColor: "lightgray",
      fontWeight:"bold"
    },
    card:{
        boxShadow: "-13px 31px 57px 19px rgba(0,0,0,0.1), 0px 10px 15px -3px rgba(0,0,0,0.1)!important",
        borderRadius: "20px!important"
    }
});
  