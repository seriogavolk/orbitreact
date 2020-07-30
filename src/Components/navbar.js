import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const styledLink = {
        textDecoration: 'none', 
        color: 'black'
     
        
    }

return (
  <>

  <div className='navbar'>
    <Link style={styledLink} to='/'><h3>Orbit Dev</h3></Link>
    <ul>
        <Link style={styledLink} to='/about'><li>About</li></Link>
        <Link style={styledLink} to='/price'><li>Price</li></Link>

        <li>Contact</li>
    </ul>
  </div>


  </>

) 
};

export default NavBar;