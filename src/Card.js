import React from 'react'


const Card=({id,name,email})=>{
    return (
        <div className='bg-light-green pa2 dib ma2 grow '> 
            <h1>"ROBOTS"</h1>
            <img src={`https://robohash.org/${name}`} alt = "robot"/>
            <div>
            <p>{name}</p>
            <p> {email}</p>
            </div>
        </div>
        
    );
}
export default Card;