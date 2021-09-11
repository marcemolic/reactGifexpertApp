import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     //hajime no ippo

    //     // solucion que hice y salio incorrecta 
    //     // setCategories(add =>{
    //     //     add.push('hajime no ippo')
    //     // })
    //     // solucion correcta 1
    //     // setCategories([...categories, 'hajime no ippo']);
    //     //solucion correcta 2 (pero da mas personalizacion )
    //     setCategories(add =>[...add, 'hajime no ippo']);

    // }

    return (
        <>
            <h2> GifExpertApp </h2>

            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}> Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                        //esto es una solucion pero no la correcta por conficto en modificaciones
                        // categories.map((category, idx) => {
                        // return <li key={idx} > {idx + 1} </li>
                        // una solucion que si sirve es y evita el problema es este problema
                        // return <li key={category}> {category} </li>

                        // si es  un solo componente se puede intercambiar los{} por () y evitas escribir el return
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;