import React from 'react'
import Hero from '../assets/static/img/flor_s_fondo.png'
import '../assets/styles/styles.styl'

const BlogHeader = () => {
    return(
        <>
            <section className="blog-upper"></section>
            <section className="blog-header-container">
                <div className="blog-title-container">
                    <h1 className="blog-header__title">Blog cervecero</h1>
                </div>
                <div>
                    <img src={Hero} alt="" />
                </div>

            </section>
        </>
    )
}

export default BlogHeader;