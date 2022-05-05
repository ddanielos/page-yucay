import React from 'react'
import '../assets/styles/styles.styl'

const ListOfBeers = ({children, title}) => {
    return(
        <div className="listOfBeers">
            <section className="upper">
            </section>
            <h1 className="title"></h1>

            {children}
        </div>
        
    )
}

export default ListOfBeers;