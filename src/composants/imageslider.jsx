import '../index.css'; 
import videoFile from '../assets/videos/Blue And White Modern Extend a Helping Hand through Open Donations Instagram Post (1).mp4';

const imageslider = () => {
  return (
    <section className="homepage" id="home">
      <div className="video-background">
        {/* Utilisation de videoFile pour la source */}
        <video autoPlay muted loop playsInline>
          <source src={videoFile} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
      </div>
      <div className="content">
        <div className="text">
          <h1 style={{ marginTop: '5rem' }}>Terrains Pro, Matchs Mémorables</h1>
          <p>Réservez facilement les meilleurs terrains de football à proximité. Profitez d’un service rapide, fiable et adapté à vos besoins, que vous soyez amateur ou professionnel. Découvrez une nouvelle façon de jouer, avec des installations de qualité et des expériences inoubliables.</p>
        </div>
        <div className="ok">
        <a style={{ backgroundColor: 'rgba(0, 128, 0, 0.5)', backdropFilter: 'blur(10px)' }} href="#services">
  Nos Services
</a>

          <a style={{ backgroundColor: 'rgba(8, 8, 8, 0.5)', backdropFilter: 'blur(10px)' }} href="#contact">Contact</a>
        </div>
        <div className="oui">
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </section>
  );
};

export default imageslider;
