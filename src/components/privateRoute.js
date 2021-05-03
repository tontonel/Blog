import {React, useContext, useState, useEffect} from 'react'
import {Route, Redirect} from "react-router-dom";
import {Authentication} from "../context/context";

export default function PrivateRoute({component: Component, ...rest}) {
    const {state} = useContext (Authentication);
    const {isLogged} = state;
    return (
        <Route
            {...rest}
            render = {props => {
                if (isLogged)
                    return <Component {...props} />; 
                else 
                    return <Redirect to = "/login"/>
            }}
        />
    )
}
