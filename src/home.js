import React from 'react';
import Hero from './Components/Hero';
import CardUs from './Components/card';
import html from './images/html.svg';
import css from './images/css.svg';
import javascript from './images/javascript.svg';
import mongodb from './images/mongodb.png';
import postgresql from './images/postgresql.png';
import nodejs from './images/nodejs1.png';

const Home = () => {
    return (
        <>
        <div className='outside'>
        <Hero />
        <div className='mainwrap'>
            <h2>Why Us?</h2>
            <div className='cards'>
            <CardUs 
            src={html}
            typo={'We apply the most up to date practices in HTML5 within the scope of our projects'} />
                
      
            <CardUs 
            src={css}
            typo={'Style and design with modern CSS3 practices in mind'} />
                
          
            <CardUs 
            src={javascript}
            typo={'Excellent knowledge in JavaScript'} />
                
          
            <CardUs 
            src={mongodb}
            typo={'We provide DataBase Solutions using MongoDB'} />
             <CardUs 
            src={postgresql}
            typo={'We utilize PostgreSQL for more complex and expansive database needs'} />
             <CardUs 
            src={nodejs}
            typo={'As part of full stack development process we provide Back-End Solutions'} />
                
          </div>
        </div>
        </div>
        </>
    )
}

export default Home;