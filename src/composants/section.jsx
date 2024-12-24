
import './Section.css';
import myImage from '../assets/Images/3 (2).png';
import myImages from '../assets/Images/1.png';
import myImagess from '../assets/Images/2.png';

const Section = () => {
  return (
    <div>
      <section className="container py-5" id="skills">
        <div className="row text-center">
        <div className="col-12 d-flex flex-column justify-content-center text-center">
  <h2>Réservez en Toute Simplicité</h2>
  <h5>
    Accédez à une plateforme intuitive pour réserver votre terrain en quelques clics. 
    Choisissez l'heure, la date et le terrain qui correspondent à vos besoins.
  </h5>
</div>

        </div>
        <div className="row">
          <div className="card">
            <img src={myImage} alt="Qualité des Installations" />
            <h3>Qualité des Installations</h3>
            <p>
              Des terrains parfaitement entretenus pour une expérience de jeu optimale.
            </p>
          </div>
          <div className="card">
            <img src={myImages} alt="Accessibilité" />
            <h3>Accessibilité</h3>
            <p>
              Facilité de réservation en ligne, avec des options adaptées à tous les besoins.
            </p>
          </div>
          <div className="card">
            <img src={myImagess} alt="Services Complémentaires" />
            <h3>Services Complémentaires</h3>
            <p>
              Des équipements et services supplémentaires pour enrichir votre expérience sportive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
