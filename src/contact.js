import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';



const Contact = () => {
    const {register, handleSubmit} = useForm();
  
    const onSubmit = (data) => {
    const inputs = ([data])
    console.log(inputs);}
    return(
        <>

        
            <form onSubmit={handleSubmit(onSubmit)} id='inquiry' >

                <button 
                className='btn1 eff' 
                form='inquiry' 
                type='submit' 
                
                >Submit</button>
            </form>
    


        <Link to="/"><p>Go Back Home</p></Link> 
        </>
  
    )
}

export default Contact;