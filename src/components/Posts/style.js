import {makeStyles} from "@material-ui/core";

export default makeStyles ({
    gridItem: {
        width: "90%",
        marginBottom: "1rem",
        margin: "auto"
     },
     paper: {
        margin: "auto",
        marginTop: "6rem",
        padding: theme.spacing(3),
        maxWidth: 1000,
        backgroundColor: "#ccf2f4",
    },
     photo : {
         borderRadius: "100%",
         width: "50px",
         marginLeft: "0.2rem"
     },
     postHead: {
         padding: "1rem",
         display: "flex",
         borderColor: 'black',
     },
     name: {
         fontFamily: "Noto Sans JP",
         marginLeft: "0.3rem",
         fontSize: "0.85rem",
         fontWeight: "fontWeightRegular",
         fontHeight: "6px"
     },
     post: {
         padding:"2%",
         backgroundColor: "#f7f2c6"
     },
     text: {
         marginLeft: "1rem"
     },
     title: {
         display: "flex",
     },
}, {index: 1})