import { useState, useEffect } from "react";

const Login = () => {
    const [registro, setRegistro] = useState([]);

    useEffect(()=>{
        getRegistro('/public/datos.json')
    },[]);

    const getRegistro = async(url) => {
        const respuesta = await fetch(url);
        const objeto = await respuesta.json();

        setRegistro(objeto.registro);
    }

    return ( 
        <>
        <div>
            <h2>Formulario de registro</h2>
            <form className="Registro" action="">
                <input type="text" placeholder="Usuario"/>
                <input type="password" name="" id="" placeholder="Contraseña"/>
                <input type="submit" />
            </form>
        </div>
        </>
     );
}
 
export default Login;