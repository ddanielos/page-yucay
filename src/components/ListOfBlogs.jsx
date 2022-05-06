import React from 'react'
import '../assets/styles/styles.styl'

const ListOfBlogs = ({children}) => {
    return(
        <div className="list-of-blogs">
            {children}
        </div>

    )
}

export default ListOfBlogs;