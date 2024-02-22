import "./LoginPage.css";

import { Link } from 'react-router-dom';
import { Logo } from "../components/Logo/Logo";
import PolygonLogin from "../assets/polygonLogin.svg";

export const LoginPage = () => {

  return (
    <main className="loginPage">
      <div className="cabeceraLogin">
        <img src={PolygonLogin} alt="" />
      </div>
      <div className="wrapper">
        <h2>Iniciar sesión</h2>
        <button className="google-button" type="google">Con Google</button>
        <form>
          <h3>O con correo electrónico</h3>
          <input className="inputBox" type="text" placeholder="Su correo" required />
          <input className="inputBox" type="password" placeholder="contraseña" required />
          <Link to="/home" className="submitButton">Entrar</Link>
          <a href="#" className="register-link">Nuevo bee? Registro</a>
        </form>
      </div>
    </main>
  );
};
