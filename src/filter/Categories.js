import React from "react"
import "./Categories.css"

const Categories = ({handleClick}) => {
    return (
        <div id="menu">
            <button className="btn chosen f" name="" onClick={handleClick}>All</button>
            <button className="btn f" name="nature" onClick={handleClick}>Nature</button>
            <button className="btn f" name="animals" onClick={handleClick}>Animals</button>
            <button className="btn f" name="people" onClick={handleClick}>People</button>
            <button className="btn f" name="food" onClick={handleClick}>Food</button>
            <button className="btn f" name="architecture" onClick={handleClick}>Architecture</button>
            <button className="btn f" name="interior" onClick={handleClick}>Interior</button>
            <button className="btn f" name="texture" onClick={handleClick}>Texture</button>
        </div>
    )
}

export default Categories