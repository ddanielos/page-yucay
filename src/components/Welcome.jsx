import React from 'react';
import '../assets/styles/components/Welcome.styl';
import logo from '../assets/static/logo.png';

const Welcome = () => {
   return(
      <div className="texto">
         <h1>Esta es la pagina de inicio...!</h1>
         <p>Ahora arranquemos con la creación de nuestra app en React</p>
         <img src={ logo } alt=""/>
      </div>
   )
};

export default Welcome;