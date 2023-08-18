import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import  About from '../About';
import  Experience from '../Experience';
import  Contact  from '../Contact';
import Header from './Header';


const Routing = () => {
  return (
    <>
     <BrowserRouter>
     <Header></Header>
     <Routes>
        <Route exact path="/"  element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
     </Routes>
     </BrowserRouter>


    </>
   
  )
}

export default Routing