import React from 'react'

const GifGridItem = ({id, title, url}) => {
    console.log({id, title, url})
    return (
        <div  className="card animate__pulse">
            <img src={ url } alt={ title }/>
            <p className="titulo_gif">{title}</p>
        </div>
    )
}

export default GifGridItem
