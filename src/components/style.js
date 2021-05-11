import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#aaaaaa",
        marginBottom: "10rem"
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 0.97,
        letterSpacing: "6px",
        fontFamily: "Montserrat"
      },
      buttons: {
        display: "flex",
        justifyContent: "space-between"
        
      },
      postButton: {
        // backgroundColor: "#a4ebf3",
        marginTop: "5%",
        marginRight: "3rem",
        borderRadius: "40%"
        
      },
      loginButton: {
        // backgroundColor: "#a4ebf3",
      },
      photo : {
        borderRadius: "100%",
        width: "50px",
      },
      Grid: {
        backgroundColor: "#a1cae2",
        // marignTop: "100px",
        // marginLeft: "auto",
        // marginRight: "auto",
        width: "25%",
        height: "18rem",
        borderRadius: "20%",
        minWidth: "300px"
    },
    container: {
        marginTop: "150px",
        display: "flex",
        justifyContent: "center"
    },
    GridItem: {
        display: "flex",
        alignItems: "center"
    },
    form: {
      marginTop: "5rem",
      display: "flex",
      justifyContent: "center"
    },
    inputTitle: {
      border: "none",
      padding: "0.5rem",
      paddingLeft: "1rem"
    },
    formBox: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      width: "70%",
      minWidth: "350px"
     },
     newPostContent: {
       marginTop: "5rem"
     },
     Composite: {
       textAlign: "center",
       letterSpacing: "4px"
     },
     textarea: {
       border: "none",
       minHeight: "10rem",
       padding: "1rem"
     },
     button: {
      width: "10%",
      minWidth: "5rem",
      marginTop: "1rem",
      margin: "auto",
      backgroundColor: "#ccf2f4",
     }

}, {index: 1}));