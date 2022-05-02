import React from 'react'
import ibuLogo from '../assets/static/img/lupulo.png'
import ohLogo from '../assets/static/img/alcohol.png'
const BeerItem = (props) => {
    const { title, cover, description, details, pair, abv, intensity, count } = props;

    return(
        <div className="beeritem__container">
            <div className="beer-container">
                <div className="beer-style-logo">
                    <img className="style-logo" src={cover} alt='' />
                </div>
                <div className="beeritem__details">
                    <h2 className="beer__title">{title}</h2>
                    <ul className="beer__parameters">
                        <li className="beer__parameters-item">
                            <span><img className="icon__ibu" src={ibuLogo} alt="" /></span>
                            <span>{intensity}</span>
                        </li>
                        <li className="beer__parameters-item">
                            <span><img className="icon__oh" src={ohLogo} alt="" /></span>
                            <span>{abv}</span>
                        </li>
                    </ul>
                    <h2 className="beer__details">{details}</h2>
                    <div className="beer__description">{description}</div>
                    <h3 className="beer__pair">maridala con:{`  ${pair} ${count}`}</h3>
                </div>
            </div>
        </div>
    )
}

export default BeerItem;