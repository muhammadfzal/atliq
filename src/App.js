import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/home';
import Service from './component/service';
import Contact from './component/service';
import FrontEnd from './component/frontEnd';
import SystemDevelopmet from './component/system-development'
import SEO from './component/seo'
import './App.css'
import './index.css'
import Header from './component/header'
import Footer from './component/footer'

const App = () => {
  return (
 
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/front-end" element={<FrontEnd />} />
        <Route path='/system-development' element={<SystemDevelopmet/>}/>
        <Route path='/seo' element={<SEO/>}/>  
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
