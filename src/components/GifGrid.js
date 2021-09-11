import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    /**
     * se crea un listado dinamico con el elemento useStatecon los nombres pertinentes
     */
    // const [images, setImages] = useState([]);
    
    const {data:images, loading} = useFetchGifs(category) ;



    
    // /*
    // useEffect 
    // Es un componente de react que ayuda a controlar la detonacion de una funcion de 
    // cuando se renderisa el componente haciendolo llamar solo una vez
    // si que es que ahi una funcion  que se llama muchas veces a travez de un evento
    // */
    // useEffect(() => {
    //     /*  
    //     al llamar la funcion que no queremos repetir dentro de la funcion useEffect
    //     este evita la detonacion multiple por la funcion detonado si no es llamado 
    //     */
    //     // getGifs();
    //     // aca es donde se llama el helper de este programa interactuando como un fetch
         
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    //         /**la seccion de abajo evita errores en caso de que el elemento llamado al UseEffect
    //          * cambie de algun modo o se quiera llamar otra vez
    //          */
    // }, [category])
    // /**
    //  * luego, aca llamamos a la api donde sacamos los componentes y filtramos los datos 
    //  * que necesitamos para identificarlo  y darle orden y mostar la imagen
    //  *  // revisar getGifs.js
    //  */


    // // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>
            {/* {loading ? 'cargando...': 'data cargada'} */}
            { loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">

                {images.map(images => (

                    //    <li key={images.id}>item: {images.title}</li>

                    <GifGridItem
                        key={images.id}
                        //para mandar todos los parametros de un objeto por el props se ocupa eso
                        {...images}
                    />
                ))}
            </div>
        </>
    )
}
