import React from 'react'
import ibuLogo from '../assets/static/img/lupulo.png'
import ohLogo from '../assets/static/img/alcohol.png'
import '../assets/styles/styles.styl'
const url = process.env.API_URL_COVER;

const BeerItem = (props) => {
    //const { title, cover, description, details, pair, abv, intensity, count } = props;
    const { count } = props;
    const { name, cover_url, description, detail, pair, abv, bitterness } = props.attributes;
    const cover = `${url}${cover_url}`
    let classContainer = "beer-container"
    
    count%2==0 && (classContainer = "beer-container container__rigth")
    return(
        <div className="beeritem__container">
            <div className={classContainer}>
                <div className="beer-style-logo">
                    <img className="style-logo" src={cover} alt='' />
                </div>
                <div className="beeritem__details">
                    <h2 className="beer__title">{name}</h2>
                    <ul className="beer__parameters">
                        <li className="beer__parameters-item">
                            <span><img className="icon__ibu" src={ibuLogo} alt="" /></span>
                            <span>{bitterness}</span>
                        </li>
                        <li className="beer__parameters-item">
                            <span><img className="icon__oh" src={ohLogo} alt="" /></span>
                            <span>{abv}</span>
                        </li>
                    </ul>
                    <h2 className="beer__details">{detail}</h2>
                    <div className="beer__description">{description}</div>
                    <h3 className="beer__pair">maridala con:{`  ${pair}`}</h3>
                </div>
            </div>
        </div>
    )
}

export default BeerItem;
