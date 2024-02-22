import "./DetailsPage.css";

import imageWeding from "../assets/imageWedding.jpg";
import { HeartIcon } from "../assets/HeartIcon";
import star from "../assets/star.svg";
import fotoPerfil from "../assets/fotoPerfil.jpg";
import { BackButton } from "../assets/BackButton";

export const DetailsPage = () => {
  
return (
    <main className="detailsPage">
        <section className="seccionImagen">
            <div className="imagenesDetails">
                <div className="heartIcon">< HeartIcon /></div>
                <div className="backButton"> <BackButton/></div>
                <img src={imageWeding} alt="" />
            </div>
        </section>
        <section className="seccionInfo">
            <h1>25€/hora</h1>
            <h2>Fotografía para bodas</h2>
            <div className="vendedor">
                <div className="vendedorPerfil">
                    <div className="fotoPerfil"> <img src={fotoPerfil} alt="" /> </div>
                    <div className="nombrePuntuacion">
                        <h3>Karthi M.</h3>
                        <div>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <button>Chat</button>
            </div>
            <p>Descripción</p>
            <p>¿Estás a punto de embarcarte en la hermosa travesía del matrimonio? En ese caso, ¡nuestro equipo de fotografía de bodas está aquí para transformar tus momentos especiales en recuerdos eternos!</p>
        </section>
        <button className="botonComprar">Comprar</button>
    </main>
  )
}