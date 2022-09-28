import { React, useContext, useRef, useState } from "react"
import { Typography, AppBar, Toolbar, Button, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import { Authentication } from "../context/context";
import AccountOptions from "./NavBarComponents/AccountOptions";
import useStyle from "./style"

export default function NavBar({ isHome }) {
    const classes = useStyle();
    const { state } = useContext (Authentication);
    const { isLogged, photo } = state;
    const [photoAnchor, setPhotoAnchor] = useState(null)

    return (
            <div>
            <AppBar position="fixed" className= {classes.root}>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Blog
                    </Typography> 
                    <Box component= "div"  className= {classes.buttons}>
                        { isHome && 
                            <Link to = "/newpost">
                                <Button className= {classes.postButton}>
                                    <AddIcon/>
                                </Button>
                            </Link> }
                        { !isLogged ? <Link to = "/login" style = { { textDecoration: "none" } }>
                                            <Button className= { classes.loginButton }>Login</Button>
                                        </Link> 
                                    : <img className = {classes.photo} 
                                            onClick={ (e) => setPhotoAnchor(e.currentTarget) } src = { photo }/>}
                        <AccountOptions photoAnchor={photoAnchor} setPhotoAnchor={setPhotoAnchor}/>
                    </Box>   
                </Toolbar>
            </AppBar>
            </div>
        )
}
