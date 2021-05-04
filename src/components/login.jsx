import React from 'react'
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import {Container, Grid} from "@material-ui/core";
import useStyles from "./style";

export default function Login() {
    const classes = useStyles ();
    return (
        <div>
        <Container className= {classes.container}>
            <Grid
                className= {classes.Grid}
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                spacing = {3}
            >
                    <Grid item className= {classes.GridItem} xs lg><a style = {{textDecoration: "none",}} href = "https://protected-temple-06423.herokuapp.com/auth/facebook"><FacebookLoginButton /></a></Grid>
                    <Grid item className= {classes.GridItem} xs lg><a style = {{textDecoration: "none"}} href = "https://protected-temple-06423.herokuapp.com/auth/google"><GoogleLoginButton/></a></Grid>
            </Grid>
        </Container>
        </div>
    )
}
