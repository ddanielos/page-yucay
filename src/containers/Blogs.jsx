import React from 'react'
import BlogHeader from '../components/BlogHeader'
import ListOfBlogs from '../components/ListOfBlogs'
import BlogItem from '../components/BlogItem'
import styled from 'styled-components';
import {color_secundario} from '../assets/styles/lib/Variables'
import '../assets/styles/styles.styl'

const BlogContainer = styled.div`
    height: 57vh;
    background-color: ${color_secundario};
`

const Blogs = (props) => {
    const reverseBlogs = props.data?.slice().reverse();

    return(
        <BlogContainer>
            <BlogHeader />
            <ListOfBlogs>
                {
                    reverseBlogs?.length > 0 &&
                    reverseBlogs?.map( item => {
                        return (
                            <BlogItem key={item.id} {...item} />
                            )
                    })
                }
            </ListOfBlogs>
        </BlogContainer>
    )
}

export default Blogs;