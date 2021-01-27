import React from "react"
import ImgCard from "./ImgCard"
import "./ImageList.css"

const ImageList = ({imgdata, handleClick}) => {
    let imgcards = imgdata.map(image => {
       return <ImgCard key={image.id} id={image.id} data={image} handleClick={handleClick}/>
    })
    return (
        <div className="container">
            {imgcards}
        </div>
    )
}

export default ImageList