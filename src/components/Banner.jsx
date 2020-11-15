import React from 'react';
import Ave from '../assets/static/img/ave.png';
import Blandas from '../assets/static/img/blandas.png';
import Proceso from '../assets/static/img/proceso.png';
import '../assets/styles/styles.styl';

const Banner = () => {
   return(
      <>
         <div className="banner">
            <div className="banner-container">
               <div className="banner-left">
                  <img src={Proceso} alt="proceso"/>
                  <img className="blandas" src={Blandas} alt="Tierras blandas"/>
                  <img src={Ave} alt=""/>
               </div>
               <div className="banner-center">
                  <div className="banner-center__container">
                     <p className="frases">ch'alla!</p>
                     <p className="Todas">Todas las cervezas</p>
                     <p className="frases">Apoya negocios locales</p>
                  </div>
               </div>
               <div className="banner-right">
                  <img src={Proceso} alt="proceso"/>
                  <img className="blandas" src={Blandas} alt="Tierras blandas"/>
                  <img className="ave" src={Ave} alt=""/>
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner;