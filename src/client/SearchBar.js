import React from 'react'

const SearchBar = ({handleChange}) => {  
    return (
        <div className="filters">
            <input id="search-bar" 
            className="form-control" 
            placeholder="Name" onChange={handleChange} />
        </div>
    )
}

export default SearchBar