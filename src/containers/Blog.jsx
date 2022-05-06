import React from 'react'
import BlogHeader from '../components/BlogHeader'
import ListOfBlogs from '../components/ListOfBlogs'
import BlogItem from '../components/BlogItem'
import '../assets/styles/styles.styl'

const Blog = () => {
    return(
        <div className='blog-container'>
            <BlogHeader/>
            <ListOfBlogs>
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </ListOfBlogs>
        </div>
    )
}

export default Blog;