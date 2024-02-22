import "./HomePage.css";
import { Link } from "react-router-dom";

import { Logo } from "../components/Logo/Logo";
import { SearchComponent } from "../components/SearchComponent/SearchComponent";
import { NavBar } from "../components/NavBar/NavBar";
import { HeartIcon } from "../assets/HeartIcon";
import CreativeIcon from "../assets/creativoIcon.svg";
import MantenimientoIcon from "../assets/mantenimientoIcon.svg";
import TecnologiaIcon from "../assets/tecnologiaIcon.svg";
import imagenWedding from "../assets/imageWedding.jpg";
import imagenDev from "../assets/imagenDev.svg";
import imagenGuitarra from "../assets/imagenGuitarra.svg";

export const HomePage = () => {
  const products = [
    { id: 1, name: "Kristin B.", price: "20€/hora" },
    {
      id: 2,
      name: "Pablo Méndez",
      price: "18€/hora",
    },
    {
      id: 3,
      name: "Katherine Born",
      price: "16€/hora",
    },
    {
      id: 4,
      name: "Israel Pérez",
      price: "25€/hora",
    },
  ];

  return (
    <div className="home-page">
      <div className="logoHeader">
        <Logo />
      </div>
      <SearchComponent />
      <div className="categories">
        <div className="category">
          <img src={CreativeIcon} alt="Creativo" />
          <p>Creativo</p>
        </div>
        <div className="category">
          <img src={MantenimientoIcon} alt="Mantenimiento" />
          <p>Mantenimiento</p>
        </div>
        <div className="category">
          <img src={TecnologiaIcon} alt="Tecnología" />
          <p>Tecnología</p>
        </div>
      </div>
      <div className="cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link to="/detail" className="buy-button">
              <img src={imagenGuitarra} alt={product.name} />
              <div className="card-info">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};
