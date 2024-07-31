
import { useState, useEffect } from "react";

const Catalogo = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        getPeliculas('/public/datos.json');
    },[]);

    const getPeliculas = async (url) => {
        const respuesta = await fetch(url);
        const objeto = await respuesta.json();
        // console.log(objeto);

        setPeliculas(objeto.peliculas);
    }

    return (
        <>
            <h2>Este es el catálogo de películas</h2>
            <main className="Main-container">
                {peliculas.map((pelicula) => {
                    return(
                    <CardPelicula key={pelicula.id} {...pelicula} />
                    )
                })}
            </main>
        </>
    );
}

const CardPelicula = ({ titulo, director, imagen, year }) => {
    return (
        <div className="Tarjeta-pelicula">
            <img className="Tarjeta-img" src={imagen} alt={titulo} />
            <h2 className="Tarjeta-titulo">{titulo}</h2>
            <h3 className="Tarjeta-director">Director: {director}</h3>
            <h4 className="Tarjeta-año">Año: {year}</h4>
        </div>
    );
};

export default Catalogo;