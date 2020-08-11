import React, {useState, useEffect} from 'react'



const CardUs = ({src, alt, typo}) => {
    const [toggledstyle, setToggle] = useState(false);
    const [nostyle, setStyle] = useState('40');
    const onEnterEvent = '80'

    const styleHandler = () => {
        setToggle(!toggledstyle);
        if(!toggledstyle){
            setStyle('40')
        }else {
            setStyle(onEnterEvent)
        }

    }
    console.log(nostyle)
    return (
        <>
        <div className='cardcomp'>
           <img src={src} alt={alt} width='40' height={nostyle} onMouseOver={styleHandler} ></img>
           <p>{typo}</p>
        </div>
       
        </>
    )
}

export default CardUs;