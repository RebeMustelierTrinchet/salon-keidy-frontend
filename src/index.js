import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Layout from './pages/layout/layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from './pages/home/home.js';
import Layout from './pages/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import HairServices from './pages/services/hair/hair.js';
import Faqs from './pages/faq/faq.js';
import NailsServices from './pages/services/nails/nails.js';
import Services from './pages/services/services.js';
// import Services from './pages/services/services.js';
// import ContacUs from './pages/contactUs/contactUs.js';

const rootElement = document.getElementById("root");
render(
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/faqs" element={<Faqs/>} />
        <Route exact path="/services" element={<Services/>} />

        <Route exact path="/hair_services" element={<HairServices />} />
        <Route exact path="/nails_services" element={<NailsServices />} />
        {/* <Route exact path="/services" element={<ContService/>} />
        <Route exact path="/contact-us" element={<ContacUs/>} /> */}
        
      </Routes>
    </Layout>
  </Router>,
  rootElement
);


reportWebVitals();
