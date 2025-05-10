import React from 'react';
import '../assets/styles/PageStyles.css';

export default function SolutionSection() {
  return (
    <div className="page solution">
      <h2 className="solution-title">🏡 Sakha: Learning alike Home</h2>

      <div className="svg-classroom-wrapper">
        <svg className="svg-classroom" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          {/* Background */}
          <rect x="0" y="0" width="400" height="300" fill="#fff7e6" rx="20" />

          {/* Sun with rotating rays */}
          <g className="sun">
            <circle cx="310" cy="40" r="10" fill="#ffe066" />
            <g className="sun-rays">
              <line x1="310" y1="40" x2="310" y2="20" stroke="#ffe066" strokeWidth="2" />
              <line x1="310" y1="40" x2="330" y2="30" stroke="#ffe066" strokeWidth="2" />
              <line x1="310" y1="40" x2="290" y2="30" stroke="#ffe066" strokeWidth="2" />
            </g>
          </g>

          {/* Window with waving curtain */}
          <rect x="260" y="50" width="100" height="70" fill="#cceeff" stroke="#aaa" strokeWidth="2" rx="5" />
          <path className="curtain-wave" d="M260,50 Q280,80 300,50 Q320,80 340,50 Q360,80 360,120 L260,120 Z"
            fill="#e0c3fc" />

          {/* Desk */}
          <rect x="90" y="190" width="220" height="15" fill="#dcbf9b" rx="4" />
          <rect x="100" y="205" width="10" height="30" fill="#b08968" />
          <rect x="290" y="205" width="10" height="30" fill="#b08968" />

          {/* Lamp turning on */}
          <g className="lamp-blink">
            <line x1="200" y1="0" x2="200" y2="40" stroke="#aaa" strokeWidth="2" />
            <rect x="190" y="40" width="20" height="10" rx="3" fill="#fffacd" />
          </g>

          {/* Books */}
          <rect x="130" y="175" width="20" height="8" fill="#ffb4a2" rx="2" />
          <rect x="160" y="175" width="25" height="8" fill="#a2d2ff" rx="2" />

          {/* Children interacting */}
          <g className="child wave1">
            <circle cx="130" cy="150" r="10" fill="#fdd7aa" />
            <rect x="120" y="160" width="20" height="30" fill="#a2d2ff" rx="4" />
            <circle className="hand" cx="140" cy="160" r="4" fill="#fdd7aa" />
          </g>
          <g className="child wave2">
            <circle cx="250" cy="150" r="10" fill="#fdd7aa" />
            <rect x="240" y="160" width="20" height="30" fill="#b5ead7" rx="4" />
            <circle className="hand" cx="240" cy="160" r="4" fill="#fdd7aa" />
          </g>
        </svg>
      </div>

      <div className="text-content">
        <h3>🎀 Curtains Waving</h3>
        <p>The breeze sways the soft purple curtains — like the room is stretching and smiling to say, “Good morning!”</p>

        <h3>💡 Lamp Turning On</h3>
        <p>A gentle light glows above — just like magic! The lamp turns on to light your way to bright ideas and curious questions.</p>

        <h3>👧🏽👦🏻 Kids Interacting</h3>
        <p>Look! Two cheerful kids are waving at each other and you! They’re ready to learn, laugh, and explore together, all in their happy classroom right downstairs.</p>

        <h3>🏠 What Makes It Special?</h3>
        <p>No big bags. No buses. Just steps away, this classroom brings school to your neighborhood. It feels like home — and every day feels like play.</p>
      </div>
    </div>
  );
}
