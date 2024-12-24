
import '../index.css'; 
import LOGO from "/images/logo.png"

const Header = () => {
  return (
    <div className="header">
      <img src={LOGO} height={50} alt="" />
      <h1>
        <span className="red">Foot</span>
        <span className="blue">Space</span>
        <span className="yellow">Reserve</span>
      </h1>
      <div className="links">
    <a href="" id="about">A propos</a>
    <a href="" >Réservation</a>
    <a href="">Contact</a>
  </div>


    </div>
  );
};

export default Header;
