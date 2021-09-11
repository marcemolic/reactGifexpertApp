/**
 *  Helpers
 * un archivo donde puedes tener funciones externa a un componente
 * si se sigue los parametros de importacion y exportacion se manejara sin prblema
 * OJO, debe tener un return y funcionara como una aplicacion fetch 
 */

export const getGifs = async ( category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=WQM2sATqFFUSypjnJrBHsj0JSD6u20tX`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    /**
     * ya por ultimo llamamos setState para agregar los datos de la api al useState
     */
    // console.log(gifs);
    // setImages(gifs);
    return gifs;
}