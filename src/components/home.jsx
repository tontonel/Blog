
import { React } from "react"
import Posts from "./Posts/posts";
import NavBar from "./navBar"

export default function ButtonAppBar() {
  return (
    <div>
      <NavBar isHome= "true"/>
      <Posts/>
  </div>
  );
}