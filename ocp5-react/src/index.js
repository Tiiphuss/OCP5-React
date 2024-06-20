import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './components/Accueil';
import Header from './components/Header';
import Footer from './components/Footer';
import APropos from './components/APropos';
import E404 from './components/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header /> 
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="*" element={<E404 />} />
        </Routes>  
    </Router>
    <Footer />
  </React.StrictMode>
);
