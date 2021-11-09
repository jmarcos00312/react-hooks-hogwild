import React, { useState } from 'react'

function HogCards({ hog }) {
    const { name, specialty, weight, image } = hog
    const [cliked, setClicked] = useState(false)

    const handleClick = (e, hog) => {
        setClicked(prev => !prev)
    }
    const toShow = (<div>
        <h2>{specialty}</h2>
        <h4>{weight}</h4>
    </div>
    )


    return (
        <div onClick={(e) => handleClick(e, hog)}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            {cliked ? toShow : null}
        </div>
    )
}

export default HogCards
