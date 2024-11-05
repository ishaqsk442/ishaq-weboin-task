import React from 'react';

import './index.css'

function StatsSection({ stats }) {
  return (
    <section className='stats-div'>
        <div className='stats-left-cont'>
            <h1>
                <p>Empower your future with cutting-edge skills</p>
                <span>
                New, Embrace innovation, master technology, & shape the digital world
                </span>
                <p>Your journey to success starts here.</p>
            </h1>
        </div>
        <div className='stats-right-cont'>
            <p style={{fontSize:'16px'}}>Join our course with a proven track record of success, where learning isn't just about gaining skills; it's about growing them. Join us, learn with confidence, and watch your skills soar.</p>
        <div className='stats-count-div'>

            
        <div>
        <h3>Total Students</h3>
        <p style={{textAlign:'center', fontSize:'48px',fontWeight:'700'}}>{stats.total}</p>
      </div>
      <div>
        <h3>Placed Students</h3>
        <p style={{textAlign:'center', fontSize:'48px',fontWeight:'700'}}>{stats.placed}</p>
      </div>
      <div>
        <h3>Unplaced Students</h3>
        <p style={{textAlign:'center', fontSize:'48px',fontWeight:'700'}}>{stats.unplaced}</p>
      </div>
      </div>
        </div>
      
    </section>
  );
}

export default StatsSection;
