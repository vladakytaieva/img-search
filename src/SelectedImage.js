import React from "react"
import "./SelectedImage.css"

const SelectedImage = ({imgdata, num, handleClick}) => {
    let img = imgdata[num - 1]

    return (
        <div>
            <button onClick={handleClick} className="back b">↩</button>
            <div className="image flex">
                <img src={img.url} alt={img.name} id={img.id} className="img"/>
            </div>
        </div>
    )
}

export default SelectedImage