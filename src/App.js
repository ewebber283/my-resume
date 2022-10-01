import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className = "App">
      <Router>
        <Nav />
        <Footer />
      </Router>
    </div>
  );
}

export default App;