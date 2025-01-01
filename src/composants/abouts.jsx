import myImage from '../assets/Images/1.png';


import './abouts.css';

const Abouts = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">Ipsum sed adipiscing</h2>
        <p className="about-description">
          Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
          adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
          Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
        </p>
     
      </div>
      <div className="about-image">
        <img src={myImage} alt="Visual" className="image" />
      </div>
    </section>
  );
};

export default Abouts;