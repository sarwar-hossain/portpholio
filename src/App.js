import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
   <>

        <Router>
            <Header />
            <Routes> 
                <Route path="/" element={<Home name="Sarwar" age={23} />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
   
   </>
  );
}

export default App;
