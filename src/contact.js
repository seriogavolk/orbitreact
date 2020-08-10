import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';



const Contact = ({...props}) => {
    const {register, handleSubmit} = useForm();
    const [selectedPackage, setPackage] = useState('');
    const [open, setOpen] = useState(false)
    const {packages} = props.location.state;
    const toggle = () => setOpen(!open);
   

    const onSubmit = (data) => {
    const inputs = ([data])
    console.log(inputs);}


    const onChangehandler = (event) => {
       setPackage(event.target.value)
    }


    useEffect((event) => {
        if(!event) {
            setPackage(packages)
        }else {
            
            onChangehandler()
        }
        
    }, [packages]);

    const tiers = [
        {
            tier: 'Tier 1',
            price: '$500'
        },
        {
            tier: 'Tier 2',
            price: '$500'
        },
        {
            tier: 'Tier 3',
            price: '$500'
        }
    ]

    console.log(props, tiers, packages)
    return(
        <>
        
        
            <form onSubmit={handleSubmit(onSubmit)} id='inquiry' >
                <div className='dd-wrap'>
                    <div tabIndex={0} role='button' className='dd-header' onClick={() => toggle(!open)}>
                    <div className='dd-headertt'>
                    
                    </div>
                    <div className='input-space'>
                        <p>{selectedPackage}</p>
                        <p>{open ? 'Close' : 'Open'}</p>
                    </div>
                    </div>
                    {open && (
                        <div className='dd-list'>
                            {tiers.map(tier => 
                            <div className='dd-list-item' key={tier.tier}>
                                <div className='btn-list' role='button' onClick={() => setPackage(tier.tier)}>
                                    <span>{tier.tier}</span>
                                    <span>{tier.price}</span>
                                </div>
                            </div>)}
                        </div>
                    )}
                </div>

                {/* <span ref={register}> Package:{} 
                    <input 
                    type='text' 
                    value={selectedPackage} 
                    onChange={onChangehandler}></input>
                </span>
                <button 
                className='btn1 eff' 
                form='inquiry' 
                type='submit' 
                
                >Submit</button> */}
            </form>
    


        <Link to="/"><p>Go Back Home</p></Link> 
        </>
  
    )
}


export default Contact;

