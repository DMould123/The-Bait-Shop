import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './pages/Calendar';
import Restaurant from './pages/Restaurant';
import Faqs from './pages/Faqs';
import About from './pages/About';
import Home from './pages/Home';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import TicketPurchase from './pages/TicketPurchase';

export default function App() {
  const [language, setLanguage] = useState('en');
  const fullCalendar = [
    {
      id: 1,
      artist: 'The Killers',
      date: '2004-11-04',
      time: '20:00',
      price: '$25'
    },
    {
      id: 2,
      artist: 'Modest Mouse',
      date: '2005-01-06',
      time: '20:00',
      price: '$28'
    },
    {
      id: 3,
      artist: 'Death Cab for Cutie',
      date: '2005-05-05',
      time: '19:30',
      price: '$30'
    },
    {
      id: 4,
      artist: 'The Walkmen',
      date: '2005-01-27',
      time: '20:00',
      price: '$25'
    },
    {
      id: 5,
      artist: 'Rooney',
      date: '2004-02-11',
      time: '20:00',
      price: '$20'
    },
    {
      id: 6,
      artist: 'Rachael Yamagata',
      date: '2004-12-16',
      time: '19:30',
      price: '$30'
    },
    {
      id: 7,
      artist: 'Cobra Verde',
      date: '2003-12-17',
      time: '20:00',
      price: '$15'
    },
    {
      id: 8,
      artist: 'The Thrills',
      date: '2004-11-11',
      time: '20:00',
      price: '$20'
    },
    {
      id: 9,
      artist: 'Tom Vek',
      date: '2005-04-07',
      time: '20:00',
      price: '$18'
    },
    {
      id: 10,
      artist: 'The Subways',
      date: '2005-11-17',
      time: '20:00',
      price: '$20'
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar language={language} setLanguage={setLanguage} events={fullCalendar} fullCalendar={fullCalendar} />
        <main className="container mx-auto px-4">
        <Routes>
  <Route path="/" element={<Home fullCalendar={fullCalendar} />} />
  <Route path="/calendar" element={<Calendar />} />
  <Route path="/restaurant" element={<Restaurant />} />
  <Route path="/faqs" element={<Faqs />} />
  <Route path="/about" element={<About />} />
  <Route path="/success" element={<Success />} />
  <Route path="/cancel" element={<Cancel />} />
  <Route path="/ticket-purchase" element={<TicketPurchase />} />
</Routes>
        </main>
      </div>
    </Router>
  );
}
