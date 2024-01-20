import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/"element={<About />} />

      <Route path="/contact"element={<Contact />} />

      <Route path="/portfolio"element={<Portfolio />} />

      <Route path="/resume"element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
