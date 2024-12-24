import '../index.css'; 
import myImage from '../assets/Images/3 (2).png'; // Assurez-vous que l'image est bien présente dans ce chemin
import myImages from '../assets/Images/1.png'; // Assurez-vous que l'image est bien présente dans ce chemin
import myImagess from '../assets/Images/2.png'; // Assurez-vous que l'image est bien présente dans ce chemin

const Section = () => {
  return (
    <div>
      <section className="container py-5" id="skills">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>Réservez en Toute Sécurité</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere optio nulla quidem vitae tempora. Vitae, enim cumque architecto reiciendis aut voluptatum voluptas labore natus perferendis, porro iure, omnis itaque!            </h5>
          </div>
        </div>
        <div className="row d-flex justify-content-between mx-0">
          <div
            className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4"
            style={{ width: '25rem' }}
          >
            <img
              src={myImage} // Utilisation de l'importation de l'image
              className="img-fluid fs-2 rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                boxShadow: '0 24px 26px rgb(0, 100, 0, 0.3)' // Application de box-shadow
              }} 
            />
            <h3 className="mt-4 h4">Qualité des Installations</h3>
            <p className="text-center">
              Des terrains parfaitement entretenus pour une expérience de jeu optimale.
            </p>
          </div>
          <div
            className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4"
            style={{ width: '25rem' }}
          >
            <img
              src={myImages} // Utilisation de l'importation de l'image
              className="img-fluid fs-2 rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                boxShadow: '0 24px 26px rgb(0, 100, 0, 0.3)'
              }} 
            />
            <h3 className="mt-4 h4">Accessibilité</h3>
            <p className="text-center">
              Facilité de réservation en ligne, avec des options adaptées à tous les besoins.
            </p>
          </div>
          <div
            className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4"
            style={{ width: '25rem' }}
          >
            <img
              src={myImagess} // Utilisation de l'importation de l'image
              className="img-fluid fs-2 rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                boxShadow: '0 24px 26px rgb(0, 100, 0, 0.3)'
              }} 
            />
            <h3 className="mt-4 h4">Services Complémentaires</h3>
            <p className="text-center">
              Des équipements et services supplémentaires pour enrichir votre expérience sportive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
