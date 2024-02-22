import "./NavBar.css";

import { HomeIcon } from "../../assets/HomeIcon";
import { HeartIcon } from "../../assets/HeartIcon";
import { AddIcon } from "../../assets/AddIcon";
import { AlertIcon } from "../../assets/AlertIcon";
import { PerfilIcon } from "../../assets/PerfilIcon";

export const NavBar = () => {
  return (
    <nav className="navegadorFooter">
      <div><HomeIcon /></div>
      <div><HeartIcon /></div>
      <div><AddIcon /></div>
      <div><AlertIcon /></div>
      <div><PerfilIcon /></div>
    </nav>
  )
}
