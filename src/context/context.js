import React, { createContext, useEffect, useReducer} from 'react';
import axios from "axios";
export const Authentication = createContext (null);

const initialState = () => {
    if (sessionStorage.getItem("auth") !== null){
        const {isLogged, photo, name} = JSON.parse (sessionStorage.getItem("auth"));
        return ({
            name: name,
            photo: photo,
            isLogged: true
        })
    }
    else return ({
        name: "",
        photo: "",
        isLogged: false
    })
}
const reducer = (state, action) => {
    switch (action.type) {
        case "LOG-IN":
            return {
                isLogged: action.auth.isLogged,
                photo: action.auth.photo,
                name: action.auth.name
            };
        case "LOG-OUT":
            sessionStorage.removeItem("auth");
            return {
                ...state,
                isLogged: false,
                photo: "",
                name:""
            }
        default:
            break;
    }
}

export const Context = ({ children }) =>  {
    const initstate = initialState ();
    const [state, dispatch] = useReducer(reducer, initstate)
    useEffect (() => {
        const config = {
            withCredentials: true
        };
            axios.get ("https://protected-temple-06423.herokuapp.com/api/isLoggedIn", config).then ((res) =>{
                // console.log (res.data)
                if (state.isLogged === false && res.data.login === true)
                {
                    var picture = "";
                    if (res.data.profile.photo.data)
                        picture = res.data.profile.photo.data.url;
                    else
                        picture = res.data.profile.photo;
                    dispatch({type: "LOG-IN", auth: {
                        isLogged: res.data.login,
                        name: res.data.profile.name,
                        photo: picture
                    }});
                    const auth = {
                        isLogged: res.data.login,
                        photo: picture,
                        name: res.data.profile.name    
                    };
                    console.log (state);
                    sessionStorage.setItem ("auth", JSON.stringify (auth));
                    // setLoggedIn (res.data.login);
                    // setName (res.data.profile.name);
                    // setPhoto (res.data.profile.photo.data);
                }
                else if (state.isLogged === true && res.data.login === false)
                {
                    sessionStorage.removeItem("auth");
                    dispatch ({type: "LOG-IN", auth: {
                        isLogged: false,
                        photo: "",
                        name: ""
                    }});
                }
            }).catch (err => console.log (err));
    }, []);
    // const [loggedIn, setLoggedIn] = useState (false);
    // const [name, setName] = useState ("");
    // const [photo, setPhoto] = useState ({});
    return (
        <Authentication.Provider value={{state, dispatch}}>
            {children}
        </Authentication.Provider>
    )
}
