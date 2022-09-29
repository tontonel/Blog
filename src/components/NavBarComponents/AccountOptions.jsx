import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { Authentication } from "../../context/context";
import { useContext } from "react";


export default function AccountOptions({ photoAnchor, setPhotoAnchor }) {
    const { dispatch } = useContext(Authentication)
    const handleClose = () => {
            setPhotoAnchor(null)
    }
    const handleClick = () => {
        dispatch( { type: "LOG-OUT" });
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