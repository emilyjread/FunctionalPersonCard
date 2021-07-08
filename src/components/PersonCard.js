import React, { useState } from 'react';

const PersonCard = props => {
    const [state, setstate] = useState({
        age:props.age
    })
    const birthday = () =>{
        setstate({
           age:state.age+1 
        })
    }
    return(
        <div>
            <h1>{ props.firstName } { props.lastName } </h1>
            <p>Age: { state.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick= {birthday}> Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default PersonCard;


