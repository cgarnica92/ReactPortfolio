import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route 
            path="resume"
            element={<Resume />}
          />
         <Route 
            path="contact"
            element={<Contact />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
