import Footer from './composants/Footer.jsx';
import Header from './composants/header.jsx'; 
import ImageSlider from './composants/imageslider.jsx'; 
import Section from './composants/section.jsx'; // Nom corrigé avec une majuscule
import Section2 from './composants/section2.jsx';

const App = () => {
  return (
    <div>

      <Header />
      <ImageSlider />
      <Section /> {/* Nom corrigé pour respecter la convention */}
      <Section2 /> {/* Nom corrigé pour respecter la convention */}
      <Footer /> 

      

    </div>
  );
};

export default App;
