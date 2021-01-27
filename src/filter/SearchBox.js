import React from "react"
import Categories from "./Categories"
import "./SearchBox.css"

const SearchBox = ({searchChange, searchfield, handleClick}) => {
    return (
        <div className="flex search-area">
            <Categories handleClick={handleClick}/>
            <input 
                type="search"
                placeholder="Search image"
                onChange={searchChange}
                value={searchfield}
                className="b search f"
            />
        </div>
    )
}

export default SearchBox