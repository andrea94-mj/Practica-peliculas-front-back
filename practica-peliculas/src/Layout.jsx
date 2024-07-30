import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from "react-router-dom";

import './css/App.css';
import './css/Peliculas.css';
import Catalogo from './pages/Catalogo';
import Login from './pages/Login';

function Layout() {
  

  return (
    <>
    

    <div>
      <header>
      <h1>Práctica de películas</h1>
      </header>

      <ul className='Secciones'>
        <li><NavLink to="/catalogo">Catálogo de películas</NavLink></li>
        <li><NavLink to="/login">Registro</NavLink></li>
        <li><NavLink to="/add">¿Más películas?</NavLink></li>
      </ul>

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
