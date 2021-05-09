import React from 'react'
import useStyle from "./style"
import {useState} from "react";
import axios from "axios";
import Navbar from "./navBar";
import qs from "qs";
import { Box, Button, Typography} from '@material-ui/core';

export default function NewPost() {
    const classes = useStyle ();
    const [text, setText] = useState ();
    const [title, setTitle] = useState ();

    function handleTextarea (event) {
        setText (event.target.value);
    }
    function handleTitle (event) {
        setTitle (event.target.value);
    }
    function handelForm (event) {
        event.preventDefault();
    }
    function handelSubmit (event) {
        let data = qs.stringify({
            title: title,
            text: text
        });
        axios.post('https://protected-temple-06423.herokuapp.com/api/posts', data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
          }, withCredentials: true}).then ((res) => {
              console.log (res);
          });
    }
    return (
        <div>
            <Navbar isHome= {false} />
                <Box className= {classes.newPostContent}>
                    <Typography variant= "h3" className= {classes.Composite}>Composite</Typography>
                    <form className = {classes.form} onSubmit = {handelForm} >
                        <Box className = {classes.formBox}>
                            <label><Typography>Title</Typography></label>
                            <input className= {classes.inputTitle} placeHolder= "Type here...." onChange = {handleTitle} type = "text"/><br/>
                            <label><Typography>Text</Typography></label>
                            <textarea className= {classes.textarea} placeHolder= "Write here...." value = {text} onChange = {handleTextarea}></textarea>
                            <Button className= {classes.button} href = "/" onClick = {handelSubmit} type = "submit"><Typography>Post</Typography></Button>
                        </Box>
                    </form>
                </Box>
        </div>
    )
}
