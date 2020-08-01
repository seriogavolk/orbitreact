import React, {} from 'react'



const CardUs = ({src, typo, alt}) => {
    return (
        <>
        <div className='cardcomp'>
           <img src={src} alt={alt} width='40' height='40'></img>
           <p>{typo}</p>
        </div>
        </>
    )
}

export default CardUs;