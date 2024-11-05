
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>
        <h1 style={{color:'rgb(201 ,253, 2'}}>LearnHub</h1>
        <p>&copy; 2024 Learn Hub. All Rights Reserved.</p>
        <Link to="/form" style={{textDecoration: 'none',color:'rgb(255 255 255)',fontWeight:'700'}}><p>Form</p></Link>
    </footer>
  );
}

export default Footer;
