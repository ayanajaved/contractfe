import React, {Component} from 'react';
import './App.css';
import Contract from './Contract';
import Navbar from './Navbar';
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Contact from './Contact';
import About from './About';

function App(){
  return <div>
    <Router>
            <Navbar />
  
            <Routes>
            <Route path='/' elements={<Contract />}/>
            <Route path='/Contract' elements={<Contract />}/>
                <Route path='/Contact' element={<Contact />} />
                <Route path='/About' element={<About />} />
            </Routes>
            </Router>
            <Contract/>

      
  </div>


}

export default App;
