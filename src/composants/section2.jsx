import myImage from '../assets/Images/1.png'; // Assurez-vous que l'image est bien présente dans ce chemin

import './section2.css'; 

const section2 = () => {
  return (
    <section className="home" id="home">
    <div className="home-content">
      <div className="text">
        <div className="text-three">Réservez votre terrain de foot en quelques clics</div>
        <div className="text-four">Profitez de nos installations de qualité pour vos matchs entre amis ou vos entraînements d'équipe.</div>
      </div>
      <div className="image-container">
        <img src={myImage} alt="Terrain de football" className="image-right" />
      </div>
    </div>
    <div className="button">
      <button>Réserver maintenant</button>
    </div>
  </section>
  

  )

}

export default section2