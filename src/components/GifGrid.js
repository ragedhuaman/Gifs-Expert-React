// import React, { useState, useEffect } from 'react'
import useFetchGifs from "../hooks/useFetchGifs"
import GifGridItem from './GifGridItem'


const GifGrid = ({ category }) => {

    const { data:imgs, loading } = useFetchGifs( category )
    console.log(loading)

    return (
        <>
            <h3 className="categoria">{ category && category.replace(category[0],category[0].toUpperCase())}</h3>
            { loading && <div className="spinner" />}
            {
            <div className="card-grid">
                {
                    imgs.map(img=>
                        <GifGridItem
                          key={img.id} 
                          { ...img } 
                        />
                    )    
                }
            </div>
            }
        </>
    )
}

export default GifGrid
