import React from 'react'
import Orbit from './orbit'
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className='herowrap'>
        
        <Orbit />
        <div className='hero'>       
        
            <h3>Orbit Web Development Designers</h3>
            <button><Link to='/contact'>Work With Us</Link></button>
        </div>
        </div>
    )
}

export default Hero;