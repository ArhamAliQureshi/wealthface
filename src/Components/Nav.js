import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <div className="logo"></div>
      <ul className="navLinks">
        <NavLink activeClassName='isActive' to='/home'>
          <li>Home</li>
        </NavLink>
        <NavLink activeClassName='isActive' to='/settings'>
          <li>Settings</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
