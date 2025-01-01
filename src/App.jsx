import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './composants/Footer.jsx';
import Header from './composants/Header.jsx';  // Si votre projet supporte des chemins absolus
import Reservation from './composants/Reservation.jsx'; // Assuming Reservation component is in this file
import ImageSlider from './composants/ImageSlider.jsx';
import Section from './composants/Section.jsx';
import Section2 from './composants/Section2.jsx';
import Abouts from './composants/abouts.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Utilisation correcte de Header avec une majuscule */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
                <Abouts />
                <Section />
                <Section2 />
                <Footer />
              </>
            }
          />
          <Route path="/reservation" element={<Reservation />} />
      
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
