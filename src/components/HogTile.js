import React, { useState } from "react";

function HogTile( { image, greased, name, medal, weight, specialty } ) {
    
    //display name and image of hog

    const [displayHog, setdisplayHog] = useState(false)

    function handleClick() {
        return setdisplayHog(!displayHog)

    }

    console.log(displayHog)
    return (
         <div onClick={handleClick} >
            <img src={image} alt={name} title={`this cutie weighs ${weight} lbs`} />
            <h1>This cutie's name is {name}</h1>
            {displayHog ? <p id="weight">This piggy weighs {weight} lbs</p>: null}
            {displayHog ? <p id="specialty">This cutie's specialty is {specialty} </p>: null}
            {displayHog ? <p id="greased">Greased: {greased.toString()}</p>: null}
            {displayHog ? <p id="medal">Highest Medal: {medal}</p>: null}
         </div>
    )     
}

export default HogTile;
