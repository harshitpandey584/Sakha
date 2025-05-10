import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Sakha</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/problem">Problem</Link>
        <Link to="/solution">Solution</Link>
      </div>
    </nav>
  );
}