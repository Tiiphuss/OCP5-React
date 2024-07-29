import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Header from './components/Header';
import Footer from './components/Footer';
import APropos from './pages/APropos';
import E404 from './pages/404';
import FicheLogement from './pages/FicheLogement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header /> 
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/fichelogement/:id" element={<FicheLogement />} />
            <Route path="*" element={<E404 />} />
        </Routes>  
    </Router>
    <Footer />
  </React.StrictMode>
);
