import React from 'react';
import logo from '../assets/static/img/logo.png';
import user from '../assets/static/img/user.png';
import sale from '../assets/static/img/sale.png';
import search from '../assets/static/img/search.png';
import '../assets/styles/styles.styl';

const Header = () => {
   return(
      <div>
         <header className="header">
            <nav className="header__menu">
               <ul>
                  <li className="header__menu-item">Nuestras Cervezas</li>
                  <li className="header__menu-item">Sobre Nosotros</li>
                  <li className="header__menu-item">Blog</li>
               </ul>
               <img className="header__menu-logo" src={logo} alt="logo yucay brewery" />
               <ul>
                  <li className="header__menu-item">Contacto</li>
                  <li className="header__menu-item">
                     <p>
                        Registrate   
                     </p>
                     <img src={user} alt=""/>
                  </li>
                  <li className="header__menu-item"><img src={search} alt=""/></li>
                  <li className="header__menu-item"><img src={sale} alt=""/></li>
               </ul>
            </nav>
         </header>
      </div>
   )
}

export default Header;