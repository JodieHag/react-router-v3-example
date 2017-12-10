import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <header>
    <nav>
      <div className="nav-wrapper">
        <ul className="left">
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/adopta" activeClassName="active">
              Adopta
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/hole" activeClassName="active">
              Hole
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
