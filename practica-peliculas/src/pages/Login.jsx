import { useState, useEffect } from "react";

const Login = () => {
    const [registro, setRegistro] = useState([]);

    useEffect(()=>{
        getRegistro('/public/datos.json')
    },[]);

    const getRegistro = async(url) => {
        const respuesta = await fetch(url);
        const objeto = await respuesta.json();

        setRegistro(objeto.results);
    }

    return ( 
        <>
        <div>
            <h2>Formulario de registro</h2>
        <form onSubmit={handleSubmit}>

            {/* input de Usuario */}
            <Input 
                name="usuario"
                label="Introduce tu usuario: "
                type="text"
                value={formData.usuario}
                onChange={handleChange}
                error={errores.usuario}
                className="textRed"
                debug={true}
            />

            {/* input de Contraseña  */}
            <Input 
                name="password"
                label="Introduce tu contraseña: "
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={errores.password}
                className="textRed"
                debug={true}
            />


            {/* input Terminos y condiciones  */}
            <Input 
                name="isTyC"
                label="Terminos y condiciones: "
                type="checkbox"
                // firstOptionLabel="Seleccione un rango"
                value={formData.isTyC}
                onChange={handleChange}
                lista={listaIsTyc}
                error={errores.isTyC}
                // debug={true}
            />


            <button type="submit">Enviar</button>
        </form>
        </div>
        </>
     );
}
 
export default Login;