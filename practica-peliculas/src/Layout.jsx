import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Link, Routes, NavLink } from "react-router-dom";

import './css/App.css';
import './css/Peliculas.css';
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';

function Layout() {
  

  return (
    <>
    

    <div>
      <header>
      <h1>Cine Zona</h1>
      </header>

      <div className='Secciones'>
        <button><NavLink to="/home">Home</NavLink></button>
        <button><NavLink to="/catalogo">Catálogo de películas</NavLink></button>
        <button><NavLink to="/login">Registro</NavLink></button>
        <button><NavLink to="/add">¿Más películas?</NavLink></button>
      </div>

      <main>
        <Outlet/>
      </main>

      

      <footer>

      </footer>
    </div>

    
    </>
    
  );
}

export default Layout
