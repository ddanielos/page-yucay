import React from 'react';

import StylePhoto from '../assets/static/img/red.png';
import OhIcon from '../assets/static/img/alcohol.png';
import LupuloIcon from '../assets/static/img/lupulo.png'

const BeerItem = (props) => {
    const { title } = props;
    return(
    <>
        <article className="beer">
            <div className="beer__details">
                <h2 className="beer__title">{title}</h2>
                <p className="beer__properties-top">
                    Dorada / Suave / Fresca / Frutada
                </p>
                <div className="beer__description">
                    Existen muchas cervezas doradas y refrescajhkhkhhkhkntes. Pero frutadas y con destellos finales de lúpulo, sólo hay un estilo: la Kölsch. En Antares rescatamos la antigua receta de la cerveza favorita de los bebedores en colonia, Alemania, y la honramos desde 1998. En nuestra cocina, su legado sigue intacto.
                </div>
                <ul className="beer__properties-bottom">
                    <li>
                        <span>
                            6.0
                            <span className="percentaje">%</span>
                        </span>
                        <span><img src={OhIcon}/></span>
                    </li>
                    <li>
                        <span>MODERADO</span>
                        <span><img src={LupuloIcon} alt="ibu" /></span>
                    </li>
                </ul>
            </div>
            <div className="beer__bottle-wrapper">
                <img className="beer__bottle" src={StylePhoto} />
            </div>

        </article>
    </>
    )
}

export default BeerItem;