import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import GetInvolved from './pages/GetInvolved';
import Services from './pages/Services';
import OurTeam from './pages/OurTeam';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

