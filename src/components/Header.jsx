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
            <div className="u-wrapper">
               <nav className="menu">
                  <div className="u-wrapper">
                     <ul className="menu-left">
                        <li className="menu-item">Nuestras Cervezas</li>
                        <li className="menu-item">Sobre Nosotros</li>
                        <li className="menu-item">Blog</li>
                     </ul>
                     <img className="menu-logo" src={logo} alt="logo yucay brewery" />
                     <ul className="menu-right">
                        <li className="menu-item">Contacto</li>
                        <li className="menu-item">
                              Registrate   
                           <img className="menu-item__icon" src={user} alt=""/>
                        </li>
                        <li className="menu-item"><img className="menu-item__icon" src={sale} alt=""/></li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
      </div>
   )
}

export default Header;