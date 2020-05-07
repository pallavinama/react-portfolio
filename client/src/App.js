import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from "./containers/About/About";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./containers/Contact/Contact";

import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        {/* {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        <Route exact path="/contact" component={Contact} /> 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
