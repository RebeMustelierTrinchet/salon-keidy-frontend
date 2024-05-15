import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next'; 
import i18n from './i18n.js'; 
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/layout/layout';
import Home from './pages/home/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import HairServices from './pages/services/hair/hair.js';
import Faqs from './pages/faq/faq.js';
import NailsServices from './pages/services/nails/nails.js';
import Services from './pages/services/services.js';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18n}> 
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/faqs" element={<Faqs/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/hair_services" element={<HairServices />} />
          <Route exact path="/nails_services" element={<NailsServices />} />
        </Routes>
      </Layout>
    </I18nextProvider>
  </Router>,
  rootElement
);

reportWebVitals();
