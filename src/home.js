import React from 'react';
import Hero from './Components/Hero';
import CardUs from './Components/card';
import html from './images/html.svg';

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
            typo={'hello world? stonks?'} />
                
            </div>
        </div>
        </div>
        </>
    )
}

export default Home;