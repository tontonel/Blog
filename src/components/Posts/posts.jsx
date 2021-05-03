import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@material-ui/core";
import axios from "axios"
import Post from './post';
import uniqId from "uniqid";
import useStyle from "./style"

export default function Posts() {
    const classes = useStyle ();
    const [posts, setPosts] = useState (["fajkfdsa"]);
    useEffect (() => {
        let mounted = true;
        axios.get ("https://protected-temple-06423.herokuapp.com/api/posts").then (result => {
            if (mounted)
                setPosts (result.data);
        })
        return () => mounted = false;
    },[])
    function handlePost (post)
    {
        return <Post key = {uniqId()} avatar = {post.avatar} title = {post.title} name = {post.name} text = {post.text}/>
    }
    return (
        <div>
        <Paper className= {classes.paper}>
            <Grid className = {classes.Gird} container direction= "column" justify="center" alignItems="center">
                {posts.map (post => handlePost(post))}
            </Grid>
        </Paper>
        </div>
    )
}