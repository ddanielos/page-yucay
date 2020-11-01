import React from 'react';
import logo from '../assets/static/img/logo.png';
import user from '../assets/static/img/user.png';
import sale from '../assets/static/img/sale.png';
import icon_ham from '../assets/static/img/beer.png';
import sale_white from '../assets/static/img/sale_white.png'
import '../assets/styles/styles.styl';

const Header = () => {
   return(
      <div className="container-header">
         {/* <input type="checkbox" id="open" className="menu-checkbox" /> */}
         <header className="header">
            {/* <div className="u-wrapper "> */}
               <label className="menu-open" style={{backgroundImage:`url(${icon_ham})`}}></label>
               <label className="sale_white" style={{backgroundImage:`url(${sale_white})`}}></label>
               <nav className="menu">
                  <div className="u-wrapper">
                     <div className="container-left">
                        <ul className="menu-left">
                           <li className="menu-item">Nuestras Cervezas</li>
                           <li className="menu-item">Sobre Nosotros</li>
                        </ul>
                     </div>
                     <div className="container-center">
                        <img className="menu-logo" src={logo} alt="logo yucay brewery" />
                     </div>
                     <div className="container-right">
                        <ul className="menu-right">
                           <li className="menu-item">Blog</li>
                           <li className="menu-item">Contacto</li>
                           <li className="menu-item">
                                 Registrate   
                              <img className="menu-item__icon" src={user} alt=""/>
                           </li>
                           <li className="menu-item"><img className="menu-item__icon" src={sale} alt=""/></li>
                        </ul>
                     </div>
                  </div>
               </nav>
            {/* </div> */}
         </header>
      </div>
   )
}

export default Header;