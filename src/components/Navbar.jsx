import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Tienda AS</h1>
        </Link>
        <ul className="menu">
          <li>
            <Link className="menu-link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/productos">
              Productos
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/productos/Accesorios">
              Accesorios
            </Link>
          </li>
          <li>
            <Link className="menu-link" to="/productos/Indumentaria">
              Indumentaria
            </Link>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

