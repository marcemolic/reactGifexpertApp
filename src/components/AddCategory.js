import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* 
cuando se realiza una cominicacion entre componentes se puede usar  props en
o se puede desextructurar  como el siguiente ejemplo
*/
export const AddCategory = ({setCategories}) => {


    /* 
    para crear un input dinamico  se necesita el useState  como primer argunento
    con esto tendremos lo necesario para darle un valor predeterminado y/o los componentes para obtener elk valor 
    y mostralo en pantalla
    */
    const [inputValue, setInputValue] = useState('')

    /* 
    con esta constante  obtengo  los cambios que se dan en el input y
    con el setInputValue doy el cambio en el useState 
     */
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }
    /* con esto, al darle enter  podremos porvocar un evento */
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho!!');
        /* es es un validador  simple para evitar errores 
         en valores vacios
        */
        if (inputValue.trim().length > 2) {
            setCategories(add => [ inputValue ,...add]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
    

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}