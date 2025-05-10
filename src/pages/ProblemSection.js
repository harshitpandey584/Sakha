import React from 'react';
import '../assets/styles/ProblemSection.css';

export default function ProblemSection() {
  return (
    <div className="problem-container">
      <div className="illustration-area">
        <div className="traffic-wrapper">
          <svg className="traffic-scene" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            {/* Two-lane road */}
            <rect x="0" y="320" width="800" height="80" fill="#A9A9A9" />
            <line x1="0" y1="360" x2="800" y2="360" stroke="#FFF" strokeDasharray="15,10" strokeWidth="2" />

            {/* Left to Right Lane */}
            <g className="moving-bus direction-ltr delay-0">
              <rect x="100" y="250" width="200" height="70" rx="10" fill="#FDB813" />
              <circle cx="130" cy="320" r="12" fill="#333" />
              <circle cx="260" cy="320" r="12" fill="#333" />
            </g>
            <g className="moving-car direction-ltr delay-2">
              <rect x="350" y="270" width="100" height="50" rx="8" fill="#D1495B" />
              <circle cx="370" cy="320" r="10" fill="#000" />
              <circle cx="420" cy="320" r="10" fill="#000" />
            </g>
            <g className="moving-car direction-ltr delay-4">
              <rect x="500" y="270" width="100" height="50" rx="8" fill="#0077B6" />
              <circle cx="520" cy="320" r="10" fill="#000" />
              <circle cx="570" cy="320" r="10" fill="#000" />
            </g>

            {/* Right to Left Lane (vehicles flipped using scaleX) */}
            <g className="moving-bus direction-rtl delay-1">
              <rect x="500" y="330" width="200" height="70" rx="10" fill="#FF7F50" />
              <circle cx="530" cy="400" r="12" fill="#333" />
              <circle cx="660" cy="400" r="12" fill="#333" />
            </g>
            <g className="moving-car direction-rtl delay-3">
              <rect x="600" y="350" width="100" height="50" rx="8" fill="#6A4C93" />
              <circle cx="620" cy="400" r="10" fill="#000" />
              <circle cx="670" cy="400" r="10" fill="#000" />
            </g>
            <g className="moving-car direction-rtl delay-5">
              <rect x="300" y="350" width="100" height="50" rx="8" fill="#2A9D8F" />
              <circle cx="320" cy="400" r="10" fill="#000" />
              <circle cx="370" cy="400" r="10" fill="#000" />
            </g>

            {/* Student illustration */}
            <g className="student-group">
              <circle cx="300" cy="240" r="16" fill="#FDD7AA" />
              <rect x="285" y="255" width="30" height="50" rx="5" fill="#FAE3B5" />
              <line x1="285" y1="260" x2="275" y2="280" stroke="#FDD7AA" strokeWidth="4" />
              <line x1="315" y1="260" x2="325" y2="280" stroke="#FDD7AA" strokeWidth="4" />
              <line x1="290" y1="305" x2="290" y2="320" stroke="#444" strokeWidth="4" />
              <line x1="310" y1="305" x2="310" y2="320" stroke="#444" strokeWidth="4" />
              <rect x="295" y="260" width="20" height="30" rx="5" fill="#6B8E23" className="bag" />
            </g>
          </svg>
        </div>
      </div>

      <div className="text-content">
        <h2>Learning shouldn't be a long commute.</h2>
        <p>
          Every day, thousands of children start their journey to learn with a struggle — long hours stuck in traffic,
          carrying heavy school bags, eyes drooping from exhaustion.
        </p>
        <p>
          For many, school feels distant — not just in miles, but in spirit. Shouldn't education be closer? More welcoming?
          Every child deserves a vibrant learning space just steps from home.
        </p>
      </div>
    </div>
  );
}
