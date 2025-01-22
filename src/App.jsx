import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './pages/Calendar';
import Restaurant from './pages/Restaurant';
import Faqs from './pages/Faqs';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar language={language} setLanguage={setLanguage} />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
