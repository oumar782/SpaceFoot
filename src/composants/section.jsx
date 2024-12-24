
import './Section.css';
import myImage from '../assets/Images/3 (2).png';
import myImages from '../assets/Images/1.png';
import myImagess from '../assets/Images/2.png';

const Section = () => {
  return (
    <div>
      <section className="container py-5" id="skills">
<<<<<<< HEAD
        <div className="row text-center">
        <div className="col-12 d-flex flex-column justify-content-center text-center">
  <h2>Réservez en Toute Simplicité</h2>
  <h5>
    Accédez à une plateforme intuitive pour réserver votre terrain en quelques clics. 
    Choisissez l'heure, la date et le terrain qui correspondent à vos besoins.
  </h5>
</div>

=======
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>Réservez en Toute Sécurité</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere optio nulla quidem vitae tempora. Vitae, enim cumque architecto reiciendis aut voluptatum voluptas labore natus perferendis, porro iure, omnis itaque!            </h5>
          </div>
>>>>>>> 06701bcf5f9010fd51ad3aebe3492a7ece1d3419
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
