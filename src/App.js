import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProblemPage from './pages/ProblemSection';
import SolutionPage from './pages/SolutionSection';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problem" element={<ProblemPage />} />
        <Route path="/solution" element={<SolutionPage />} />
      </Routes>
    </div>
  );
}
