import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLaptop, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import '../index.css'; 

const Section2 = () => {
  return (
    <div>
      <section className="container py-5" id="section2">
        <div className="row mt-4 py-3">
          <div className="col-12 d-flex flex-column text-center justify-content-center">
            <h2>Compétences</h2>
            <h5 className="text-secondary fw-normal py-2 fst-italic">
              Amélioration continue de mes compétences et de mes connaissances dans le domaine.
            </h5>
          </div>
        </div>
        <div className="row d-flex justify-content-between mx-0">
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4">
            <FontAwesomeIcon
              icon={faCartShopping} // Utilisation de l'icône spécifique
              className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                boxShadow: '0 24px 26px rgb(0, 100, 0, 0.3)',
              }}
            />
            <h3 className="mt-4 h4">Développement Front-end</h3>
            <p className="text-center">
              Compétent en HTML, CSS, et JavaScript. Expérience en conception de sites web réactifs, construction d'interfaces utilisateur conviviales et utilisation de frameworks modernes comme ReactJS.
            </p>
          </div>
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4">
            <FontAwesomeIcon
              icon={faLaptop} // Utilisation de l'icône spécifique
              className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                boxShadow: '0 24px 26px rgb(0, 100, 0, 0.3)',
              }}
            />
            <h3 className="mt-4 h4">Développement Back-end</h3>
            <p className="text-center">
              Compétent en programmation côté serveur avec des technologies telles que Node.js et Express. Expérience avec des bases de données telles que MongoDB et MySQL.
            </p>
          </div>
          <div className="card mt-5 d-flex flex-column align-items-center text-center bg-white p-4">
            <FontAwesomeIcon
              icon={faMobileScreenButton} // Utilisation de l'icône spécifique
              className="text-white bg-primary d-flex align-items-center justify-content-center fs-2 rounded-circle"
              style={{
                width: '100px',
                height: '100px',
                boxShadow: '0 24px 26px rgb(0, 100, 0, 0.3)',
              }}
            />
            <h3 className="mt-4 h4">Développement d'Applications Mobiles</h3>
            <p className="text-center">
              Compétent dans le développement d'applications mobiles pour iOS et Android en utilisant des frameworks comme React Native. Expérience dans la création d'interfaces utilisateur mobiles engageantes et intuitives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
