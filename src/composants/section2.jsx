import React from 'react';
import './section2.css';

const Section2 = () => {
  return (
    <section className="section-container">
      <div className="section-header">
        <h2>Créez des expériences <span className="highlight">inoubliables</span></h2>
        <p>Explorez un monde de possibilités infinies où chaque détail est pensé pour vous offrir une expérience unique et mémorable.</p>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-icon">❤️</div>
          <h3 className="card-title">Design Captivant</h3>
          <p className="card-description">Une expérience visuelle unique qui captive et inspire.</p>
        </div>
        <div className="card">
          <div className="card-icon">⭐</div>
          <h3 className="card-title">Qualité Premium</h3>
          <p className="card-description">Une attention aux détails qui fait toute la différence.</p>
        </div>
      </div>
      <button className="cta-button">Commencer maintenant</button>
    </section>
  );
};

export default Section2;