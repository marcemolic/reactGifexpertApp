import React from 'react'

export const GifGridItem = ({title, url}) => {

    // console.log(props)
    /**
     * puede ocupar un componente externo para darle forma a un listado 
     * que este  listado componentes para asi no saturar el componente, solo ahi que
     *  conectar los componente conectar los componentes correctamente
     */
    return (
        <div className="card animate__animated animate__fadeIn" >
           <img src={url} alt={title} />
           <p>{title}</p>
        </div>
    )
}
