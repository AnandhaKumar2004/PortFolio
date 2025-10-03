import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import WAVES from 'vanta/src/vanta.waves';
import './App.css';
import Home from './Components/Home';
import Template from './Components/Templete';
import About from './Components/About';
import Solutions from './Components/Solutions';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
  useEffect(() => {
    // Initialize Vanta.js and store the instance
    const vantaEffect = WAVES({
      el: '#vanta',
      color: 0x0
    });

    // Return a cleanup function to destroy the Vanta.js instance
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return (
    <div className="app" id="vanta">
      <Template />
      <div className="bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;