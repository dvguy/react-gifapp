export const getGifs = async (category) => {
    // const key = 'InXZnf6rzcenFpziSCjLywGCbwmsMcxj';
    // const url = 'api.giphy.com/v1/gifs/search';
    const url2 = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=InXZnf6rzcenFpziSCjLywGCbwmsMcxj`;
    const res = await fetch(url2);
    const {data} = await res.json()

    const info = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url, 
        }
    })

    return info;
}

