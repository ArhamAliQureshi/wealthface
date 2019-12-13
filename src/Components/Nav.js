import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <div className="logo"></div>
      <ul className="navLinks">
        <Link to='/home'>
          <li>Home</li>
        </Link>
        <Link to='/settings'>
          <li>Settings</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
