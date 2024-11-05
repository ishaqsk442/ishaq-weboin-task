
import React from 'react';
import './index.css'
import AboutDashboard from "../../Assets/AboutDashboard.png"
import medal from '../../Assets/medal.png';
import thought from '../../Assets/thought.png';
import training from '../../Assets/training.png';

function InsightsSection() {
  return (
    <div className='insights-div' >
        <div className='insights-div-top-cont'>
            <p>
            Open Source Theme and UI Components
            </p>
            <h1>
            Geaux Astro helps you <br></br>craft beautiful websites <br></br>efficiently
            </h1>
        </div>
      <div className='insights-div-bottom-cont'>
        <div className='insights-div-bottom-cont-left-div'>
          <div className='data-cont'>
            <img src={medal} alt="medal"/>
            <div>
            <h2>Certificate Distribution</h2>
            <p>We offer certificates to validate and recognize your achievement.</p>
            </div>
            
          </div>

          <div className='data-cont'>
            <img src={thought} alt="medal"/>
            <div>
            <h2>Knowledge</h2>
            <p>We deliver transformative knowledge that empowers and inspires.</p>
            </div>
            
          </div>
          <div className='data-cont'>
            <img src={training} alt="medal"/>
            <div>
            <h2>Hands-on Experience</h2>
            <p>We provide hands-on experience for real-world learning. You learn best by doing.</p>
            </div>
            
          </div>
          
        </div>
        <div>
          <img className='insights-div-bottom-cont-img' src={AboutDashboard} alt='dashboard'/>
        </div>
      
      </div>
      
    </div>
  );
}

export default InsightsSection;
