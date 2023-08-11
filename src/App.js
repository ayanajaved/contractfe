import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css';
import Contract from './Contract';
import Navbar from './Navbar';
import * as ReactBootStrap from "react-bootstrap";
import Contact from './Contact';
import About from './About';



function App(){

    return (
        <Router>
          <div>
            <Navbar />
            <main>
              {/* Define your routes here */}
              <Routes>
                <Route path="/" element={<Contract />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      );

}

export default App;