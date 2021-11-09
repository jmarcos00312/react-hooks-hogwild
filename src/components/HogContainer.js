import React, { useState } from 'react'
import HogCards from './HogCards'

function HogContainer({ hogs }) {
    const [hogState, setHogState] = useState(hogs)

    const showHogs = hogState.map(hog => {
        return <HogCards hog={hog} key={hog.name} />
    })

    return (
        <div>
            HOG CONTAINER
            {showHogs}
        </div>
    )
}

export default HogContainer
