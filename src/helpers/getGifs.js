const getGifs = async(category)=>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=YOMyqzWcqncU9TwMp22c8D9GIsUwUOmC&q=${ encodeURI( category )}&limit=10`
    const resp = await fetch(url)
    const { data }= await resp.json()
    console.log(data)
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })    
    return gifs
}

export default getGifs 