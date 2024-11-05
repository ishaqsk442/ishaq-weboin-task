import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'


const Navbar=() =>{
  return (
    
    <nav className='nav'>
      <Link to="/" style={{textDecoration: 'none',color:'yellow',fontWeight:'bold',fontSize:'20px',margin:'0px 0px'}}><p>Learn Hub</p></Link>
      <Link to="/form" style={{textDecoration: 'none',color:'white'}}><p>Admin</p></Link>
    </nav>
    
  );
}

export default Navbar;
