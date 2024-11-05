// TwoColumnSection.js
import React from 'react';

function TwoColumnSection() {
  return (
    <div className='' style={{ display: 'flex', padding: '2rem', background: '#e9ecef' }}>
        <div>
        <p>
        Open Source Theme and UI Components
        </p>
        <h1>
        Geaux Astro helps you craft beautiful websites efficiently
        </h1>
        </div>
        
      <div style={{ flex: 1 }}>
        <h2>Why Choose Us</h2>
        <p>We offer the best learning experience with hands-on practice and industry expertise.</p>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Our Vision</h2>
        <p>To provide accessible, high-quality education for everyone, everywhere.</p>
      </div>
    </div>
  );
}

export default TwoColumnSection;
