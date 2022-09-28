import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import useStyle from "./style";

export default function Post(props) {
    const classes = useStyle ();
    return (
        <div>
            <Grid  className= { classes.gridItem } item >
                    <Box boxShadow= { 2 } className= { classes.post }>
                        <Box  className= { classes.postHead }>
                            <img className = { classes.photo } src = { props.avatar }></img>
                            <Typography className = { classes.name }>
                                {props.name}
                            </Typography>
                        </Box>
                        <Box className = {classes.text}>
                            <Box  justifyContent="center" className= { classes.title }>
                                <Typography variant= "h5">
                                    { props.title }
                                </Typography>
                            </Box>
                            <Box >
                                <p>{ props.text }</p>
                            </Box>
                        </Box>
                    </Box>
            </Grid>
        </div>
    )
}
