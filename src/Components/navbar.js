import React, {useState} from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {

  const [absolute, setPosition] = useState({position:'absolute'})


    const styledLink = {
        textDecoration: 'none', 
        color: 'black',
    }
    const title = 'Is it working?'
return (
  <>

  <div className='navbar' style={absolute} >
    <Link style={styledLink} to='/' onClick={() => setPosition({position:'absolute'})} ><h3>Orbit Dev</h3></Link>
    <ul>
        <Link style={styledLink} to={{pathname:'/about', state:{title:{title}}}} onClick={() => setPosition({position:'relative'})}><li>About</li></Link>
        <Link style={styledLink} to='/price' onClick={() => setPosition({position:'relative'})}><li>Price</li></Link>
        <Link style={styledLink} to={{pathname:'/contact', state:{packages:''}}} onClick={() => setPosition({position:'relative'})} ><li>Contact</li></Link>
    </ul>
  </div>


  </>

) 
};

export default NavBar;