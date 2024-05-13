import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import your components
import Calculer from './components/Calculer';
import Resultats from './components/Resultats';
import { useState, useEffect } from "react";
function App() {
  const [scope1, setScope1] = useState(0);
  const [scope2, setScope2] = useState(0);
  const [scope3, setScope3] = useState(0);
  const [totale, setTotale] = useState(0);
  return (
    <Router>
      <div  className="bg-[#F8F8F8]" >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculer" element={<Calculer   scope1={scope1}
          setScope1={setScope1}
          scope2={scope2}
          setScope2={setScope2}
          scope3={scope3}
          setScope3={setScope3}
          totale={totale}
          setTotale={setTotale}/>} />
          <Route path="/resultats" element={<Resultats scope1={scope1} scope2={scope2} scope3={scope3} totale={totale}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
