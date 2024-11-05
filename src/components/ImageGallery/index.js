import React from 'react';
import './index.css'
import airbnb from '../../Assets/airbnb.png'
import grabuo from '../../Assets/grabuo.png'
import myob from '../../Assets/myob.png'
import Lifegroups from '../../Assets/Lifegroups.png'
import tailus from '../../Assets/tailus.png'
import microsoft from '../../Assets/microsoft.png'
import coty from '../../Assets/coty.png'
import lilly from '../../Assets/lilly.png'
function ImageGallery() {
  return (
    <div className="placements-div" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Our Placement Partners</h2>
      
      <div className='clients-div' >
        <img src={airbnb} alt="Course 1" />
        <img src={grabuo} alt="Course 2" />
        <img src={Lifegroups} alt="Course 3"  />
        <img src={myob} alt="Course 4"  />
        <img src={tailus} alt="Course 5" />
        <img src={microsoft} alt="Course 6"  />
        <img src={coty} alt="Course 7"  />
        <img src={lilly} alt="Course 8" />
      </div>
      <button>and, more companies</button>
    </div>
  );
}

export default ImageGallery;
