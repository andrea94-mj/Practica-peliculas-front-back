import { useState, useEffect } from "react";

const Catalogo = () => {
    
    const [peliculas, setPeliculas] = useState ([]);

    useEffect(()=>{
        getPeliculas('/public/datos.json');
    })
    const getPeliculas = async (url) =>{
        const respuesta = await fetch(url);
        const objeto = await respuesta.json();
    }

    return ( 
        <>
        <h2>Estoy en catálogo de películas</h2>

        <div>
            <h3></h3>
            <img src="" alt="" />
            
        </div>

        </>
     );
}
 
export default Catalogo;