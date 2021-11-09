import React, { useState } from 'react'
import HogCards from './HogCards'
import Filter from './Filter'
// import { computeHeadingLevel } from '@testing-library/dom'

function HogContainer({ hogs }) {
    const [hogState, setHogState] = useState(hogs)
    const [filterHogs, setFilterHogs] = useState(false)
    const [sortBy, setSortBy] = useState('name')

    const displayHogs = hogState.filter((hog) => filterHogs ? hog.greased : true)

    const showHogs = displayHogs.map(hog => {
        return <HogCards hog={hog} key={hog.name} />
    })

    const sortHogs = hogState.sort((hog1, hog2) => {
        if (sortBy === "name") {
            return hog1.name.localeCompare(hog2.name)
        } else if (sortBy === "weight") {
            return hog1.weight - hog2.weight
        }
    })


    return (
        <div>
            <Filter handleFilter={setFilterHogs} sortHogs={setSortBy} />
            {showHogs}

        </div>
    )
}

export default HogContainer
