import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './composants/Footer.jsx';
import Header from './composants/Header.jsx';
import ImageSlider from './composants/ImageSlider.jsx';
import Section from './composants/Section.jsx';
import Section2 from './composants/Section2.jsx';
import Reservation from './composants/Reservation.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
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
