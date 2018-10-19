import React from 'react';
import { Link }  from 'react-router-dom';

import './style.css';
import logo from './../../logo-db.svg';

function Header() {

    return (
        <header >
          <div className="app-header inner-container">
           <a href='/'> <img src={logo} className="app-logo" alt="logo" /></a>
           <nav className='app-header-nav'>
            <ul className = 'app-nav'>
              <li>
                <Link to="/movies" > Фильмы </Link>
              </li>
              <li>
                <Link to="/series"> Сериалы </Link>
              </li>
           
            </ul>
          </nav>
          </div>
        </header>   
     )
}
export default Header;



