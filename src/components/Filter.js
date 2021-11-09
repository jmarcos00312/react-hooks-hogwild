import React from 'react'

function Filter({ handleFilter, sortHogs }) {

    const filterHogs = () => {
        handleFilter(prev => !prev)
    }

    const handleSort = (e) => {
        sortHogs(e.target.value)
    }


    return (
        <>
            <div className="Filter">
                Greased Only
                <input type="checkbox" onChange={filterHogs} />
            </div>
            <hr />
            <div className="sort">
                Sort by:
                <br />
                <input type="checkbox" value="weight" onChange={handleSort} /> name
                <br />
                <input type="checkbox" value="name" onChange={handleSort} />weight
                <hr />
            </div>




        </>
    )
}

export default Filter
