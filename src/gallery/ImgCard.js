import React from "react"

const ImgCard = ({data, id, handleClick}) => {
    return (
        <div className="card">
            <img 
                src={data.url} 
                alt={data.name} 
                id={id} 
                onClick={handleClick}
                title={data.name}
            />
        </div>
    )
}

export default ImgCard