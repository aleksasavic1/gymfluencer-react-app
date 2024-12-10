import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import ContactUs from "./pages/ContactUs.jsx"

import Chatbot from './components/Chatbot.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Chatbot />
    </Router>
  );
}

export default App
