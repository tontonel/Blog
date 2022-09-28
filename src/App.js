import React from 'react';
import { Context } from "./context/context.js";
import Login from "./components/login";
import Home from "./components/home";
import NewPost from "./components/newPost"
import PrivateRoute from "./components/privateRoute"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Logout from './components/logout.jsx';

export default function App() {
  return (
    <div>
    <Context>
      <Router>
        <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/login" component = {Login}/>
            <PrivateRoute path = "/newpost" component = {NewPost}/>
            <Route path = "/logout" component = {Logout}/>
        </Switch>
      </Router>
    </Context>
    </div>
  );
}
