import React from 'react';
import { Link } from 'react-router-dom';


const About = (props) => {
   const {title} = props.location.state.title;
   console.log(props, title);
    return(
    
        <div className="about" >
            <h3>{title}</h3>
           <Link to="/"><p>Go Back Home</p></Link> 
        </div>

  
    )
}

export default About;