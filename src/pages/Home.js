import React from 'react';
import '../assets/styles/PageStyles.css'; // Ensure this file has the styles mentioned below

export default function Home() {
  return (
    <div className="page home-poster">
      <div className="poster-card">
        <div className="sakha-logo">
          <h2 className="school-tagline">
            <span className="styled-S">S</span>akha 🏫
          </h2>
        </div>

        <div className="intro-image-wrapper">
          <div className="intro-text">
            <h3>Best Study Place for Your Kids</h3>
            <h2>Welcome to Sakha</h2>

            <div className="details-text-inline">
              <h4>Learn to Socialize</h4>
              <p>Your child's road to success begins here! Community-based education, closer to home.</p>
            </div>
          </div>

          <div className="students-photo">
            <img
              src="/images/students-group.jpg"
              alt=""
              className="rounded-frame"
            />
          </div>
        </div>

        <div className="footer-text">
          <p>www.sakhaclassroom.org</p>
        </div>
      </div>
    </div>
  );
}
