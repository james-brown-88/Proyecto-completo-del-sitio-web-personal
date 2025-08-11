import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DigitalizacionGastronomica from './pages/servicios/digitalizacion';
import AutomatizacionIA from './pages/servicios/automatizacion';
import ConsultoriaOperativa from './pages/servicios/consultoria';
import InnovacionTecnologias from './pages/servicios/innovacion';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios/digitalizacion" element={<DigitalizacionGastronomica />} />
        <Route path="/servicios/automatizacion" element={<AutomatizacionIA />} />
        <Route path="/servicios/consultoria" element={<ConsultoriaOperativa />} />
        <Route path="/servicios/innovacion" element={<InnovacionTecnologias />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
