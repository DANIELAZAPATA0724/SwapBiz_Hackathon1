
export const HomePage = () => {
  return (
    <div>HomePage</div>
  )
}
import React from 'react';
import './HomePage.css'; 

function HomePage() {
  
  const products = [
    { id: 1, name: 'Kristin B.', image: 'image1.jpg' },
    { id: 2, name: 'Pablo Méndez', image: 'image2.jpg' },
    { id: 3, name: 'Katherine Born', image: 'image3.jpg' },
    { id: 4, name: 'Israel Pérez' , image: 'image4.jpg' },
    { id: 5, name: 'Josué Mirabal', image: 'image5.jpg' }
  ];

  return (
    <div className="home-page">
    <button className="search-button">
      <img src="./images/search-icon.png" alt="Buscar en Bizz" />
      Buscar en Bizz
    </button>
    <div className="categories">
      <div className="category">
        <img src="./images/creativo-icon.png" alt="Creativo" />
        Creativo
      </div>
      <div className="category">
        <img src="./images/mantenimiento-icon.png" alt="Mantenimiento" />
        Mantenimiento
      </div>
      <div className="category">
        <img src="./images/tecnologia-icon.png" alt="Tecnología" />
        Tecnología
      </div>
    </div>
    <div className="cards">
      {products.map(product => (
        <div className="card" key={product.id}>
          <div className="card-header">
            <div className="like-icon">❤️</div>
            <div className="comment-icon">💬</div>
            {product.name}
          </div>
          <img src={`./images/${product.image}`} alt={product.name} />
          <button className="buy-button">Comprar</button>
        </div>
      ))}
    </div>
  </div>
);
}
export default HomePage;