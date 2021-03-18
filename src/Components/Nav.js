import React from 'react';
import { Route, NavLink } from 'react-router-dom';


const Nav = () => (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/cars">Cars</NavLink></li>
        <li><NavLink to="/planes">Planes</NavLink></li>
        <li><NavLink to="/sushi">Sushi</NavLink></li>
      </ul>
    </nav>
);

export default Nav;
