import "./Header.css"
import React from "react";
import { Heart } from "./Heart";
import { Logo } from "./LogoWrapper";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="overlap-group">
        <div className="overlap">
          <div className="todas-categorias"> Todas Categorias</div>
          <img className="mingcute-down-line" alt="Mingcute down line" src="mingcute-down-line.svg" />
        </div>
        <div className="text-wrapper">Buscar ...</div>
        <img className="vector" alt="Vector" src="vector.svg" />
      </div>
      <LogoWrapper className="logo-instance" />
      <div className="div"> Todas Categorias</div>
      <img className="notifications-button" alt="Notifications button" src="notifications-button.svg" />
      <Heart className="heart-instance" />
      <img className="user" alt="User" src="user.png" />
    </div>
  );
};
