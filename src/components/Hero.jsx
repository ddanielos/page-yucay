import React from 'react';
import background from '../assets/static/img/background_hero.png';
import title from '../assets/static/img/hero.png';
import logo from '../assets/static/img/logo.png';
import '../assets/styles/styles.styl';


const Hero = () => {
   return(
      <>
         <div className="hero">
            <div className="hero__background" style={{backgroundImage:`url(${background})`}}>
               <img className="hero__title" src={ title } alt="Cerveceria artesanal"/>
               <h2 className="hero__slogan">De nuestra tierra a tu casa</h2>
               <div className="hero__border"></div>
            </div>
            <div className="hero__background-device" style={{backgroundImage:`url(${background})`}}>
               <img className="hero__logo" src={ logo } alt="Cerveceria artesanal"/>
               <p className="Todas">Todas las cervezas</p>
            </div>
            <div className="dark"></div>
         </div>
      </>
   )
}
export default Hero;