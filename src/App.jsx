import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Page/Home';
import Clothes from './Page/Clothes';
import Contact from './Page/Contact';
import About from './Page/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes/:id" element={<Clothes />} />
          <Route path="/about" element={<About />} /> {/* Fixed contact route */}
          <Route path="/contact" element={<Contact />} /> {/* Fixed contact route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
