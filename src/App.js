import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar/index';
import StudentProvider from './StudentContext';
function App() {
  return (
    <StudentProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
