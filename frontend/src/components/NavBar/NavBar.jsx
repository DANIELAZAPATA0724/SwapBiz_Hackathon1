import "./NavBar.css";

import { Link } from 'react-router-dom';

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
      <Link to="/add">
      <div><AddIcon /></div>
      </Link>
      <div><AlertIcon /></div>
      <div><PerfilIcon /></div>
    </nav>
  )
}
