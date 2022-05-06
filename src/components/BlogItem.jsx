import React from 'react'
import BlogImage from '../assets/static/img/agua-cervecera.png'
import '../assets/styles/styles.styl'

const BlogItem = () => {
    return(
        <div className="blog-item-container">
            <div className="blog-item-wraper">
                <img className="blog-item-image" src={BlogImage}/>
                <div className="blog-item-card">
                    <h2 className="blog-item-title">
                        ¿Qué tan importante es la calidad del agua en la elaboración de cerveza?
                    </h2>
                    <p className="blog-item-description">
                    El agua es la herramienta más útil del cervecero y también su ingrediente más importante. Es la base sobre la que conviven los sabores, amargor, espuma y cuerpo.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default BlogItem;
