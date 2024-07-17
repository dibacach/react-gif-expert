export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=k2HYWhslTORtwMjp2F8x4EugJc7odbA8&q=${category}&limit=10`;

    const resp = await fetch( url );
    const { data } = await resp.json();
    // console.log( data );

    const gifs = data.map( img => ({
        id: img.id,
        url: img.images.downsized_medium.url,
        title: img.title,
    }) );
    
    return gifs;

}