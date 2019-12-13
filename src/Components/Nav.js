import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
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
