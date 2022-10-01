import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { Authentication } from "../../context/context";
import { useContext } from "react";
import axios from "axios";

export default function AccountOptions({ photoAnchor, setPhotoAnchor }) {
    const { dispatch } = useContext(Authentication)
    const handleClose = () => {
            setPhotoAnchor(null)
    }
    const handleClick = () => {
        const config = {
            withCredentials: true
        };
        axios.get("https://protected-temple-06423.herokuapp.com/api/logout", config);
        dispatch( { type: "LOG-OUT" } );
        handleClose();
    }
    return (
            <Menu
                anchorEl={photoAnchor}
                onClose={handleClose}
                open={Boolean(photoAnchor)}
            >
                <MenuItem disableRipple onClick={handleClick}>
                    Logout
                </MenuItem>
            </Menu>
    )
}