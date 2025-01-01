import React from 'react';
import './Section.css';
import myImage from '../assets/Images/3 (2).png';
import myImages from '../assets/Images/1.png';
import myImagess from '../assets/Images/2.png';

const Section = () => {
  return (
    <section className="container py-5" id="skills">
      <div className="text-center mb-5">
        <h2>Réservez en Toute Simplicité</h2>
        <h5>
          Accédez à une plateforme intuitive pour réserver votre terrain en quelques clics.
          Choisissez l'heure, la date et le terrain qui correspondent à vos besoins.
        </h5>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <img src={myImage} alt="Qualité des Installations" className="card-img-top mb-3" />
            <h3>Qualité des Installations</h3>
            <p>
              Des terrains parfaitement entretenus pour une expérience de jeu optimale.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <img src={myImages} alt="Accessibilité" className="card-img-top mb-3" />
            <h3>Accessibilité</h3>
            <p>
              Facilité de réservation en ligne, avec des options adaptées à tous les besoins.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <img src={myImagess} alt="Services Complémentaires" className="card-img-top mb-3" />
            <h3>Services Complémentaires</h3>
            <p>
              Des équipements et services supplémentaires pour enrichir votre expérience sportive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
