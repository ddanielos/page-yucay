import React from 'react'
import ListOfBeers from '../components/ListOfBeers';
import BeerItem from '../components/BeerItem';
import '../assets/styles/styles.styl'


const Beers = (props) => {
    let count = 0;
    return(
        <ListOfBeers>
            {/* {props.beers?.length > 0 &&
                
                props.beers?.map( item => 
                    <BeerItem key={item.id} {...item}/>
                )
            }   */}
            {   
                props.beers?.length > 0 &&
                    props.beers?.map( item => {
                        count = count +1
                        return (
                            <BeerItem key={item.id} {...item} count={count} />
                            )
                    })
            }
        </ListOfBeers>
    )
}

export default Beers;