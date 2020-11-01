import React from 'react';
import '../assets/styles/styles.styl';
import background from '../assets/static/img/background_hero.png';
import title from '../assets/static/img/hero.png';

const Hero = () => {
   return(
      <>
         <div className="hero">
            <img className="hero__background" src={ background } alt="Fabrica Yucay Brewery"/>
            <div className="hero__background-device" style={{backgroundImage:`url(${background})`}}></div>
            <img className="hero__title" src={ title } alt="Cerveceria artesanal"/>
         </div>
      </>
   )
}
export default Hero;