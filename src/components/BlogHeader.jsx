import React from 'react'
import Hero from '../assets/static/img/flor_s_fondo.png'
import '../assets/styles/styles.styl'

const BlogHeader = () => {
    return(
        <>
            <section className="blog-upper"></section>
            <section className="blog-header-container">
                <div className="blog-title-container">
                    <img src={Hero} alt="" />
                    <h1 className="blog-header__title">Blog cervecero</h1>
                </div>
                <div>
                </div>

            </section>
        </>
    )
}

export default BlogHeader;