import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"])

    return (
        <>
          <h2 className="titulo">GiftExpertApp</h2>
          <p className="nom_categoria">Ingrese la categoria de los gifs a obtener</p>
          <AddCategory setCategories = { setCategories }/>
          <hr />
          <ol>
              {
                categories.map(category=>
                    <GifGrid 
                      key = { category }
                      category = { category }
                    />
                )
              }
          </ol>
        </>
    )
}

export default GiftExpertApp
