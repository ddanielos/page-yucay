import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
//import BlogImage from '../assets/static/img/agua-cervecera.png'
import styled from 'styled-components';
import { color_principal, color_secundario, Fuente1 } from '../assets/styles/lib/Variables'
import '../assets/styles/styles.styl'

const url = process.env.API_URL_COVER;

const BlogItemContainer = styled.div`
  padding: 60px 0 60px 0;
`
const BlogItemWraper = styled.div`
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0px 0px 25px rgba(198, 106, 72, 0.5);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 450px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover{
    box-shadow: rgb(210, 120, 90) 0px 10px 15px -5px;
    transform: translateY(-2%);
  }
`
const BlogItemImg = styled.img`
  width: 100%;
  height: auto;
`
const BlogItemCard = styled.div`
  height: 200px;
  display: flex;
  background: ${color_principal};
  flex-direction: column;
  justify-content: space-evenly;
  transition: 450ms opacity;
  padding: 20px;
  text-align: justify;
  line-height: 1.4rem;
`
const BlogItemTitle = styled.h3`
  font-family: ${Fuente1};
  text-transform: uppercase;
  font-size: 1.0rem;
  margin-top: 10px;
  margin-bottom: 10px;
`
const BlogItemDescription = styled.p`
  font-family: ${Fuente1};
  font-size: 0.9rem;
`
const BlogItemImgContainer = styled.div`
  width: 400px;
  height: 250px;
  overflow: hidden;
  position: relative;
`
const BlogItemDate = styled.div`
  padding-top: 15px;
  margin-left: auto;
  align-self: flex-end;
  font-family: ${Fuente1};
  font-size: 0.8rem;
  color: ${color_secundario};
`

const BlogItem = (props) => {
  // console.log(props)
  const [isMounted, setMount] = useState(false);
  const { title, content, cover, description, publishedAt } = props.attributes;
  const cover_img = `${url}${cover}`

   useEffect(()=>{
    setMount(true);
  },[]);

  return(
    <BlogItemContainer>
      <BlogItemWraper>
        <BlogItemImgContainer><BlogItemImg src={cover_img}/></BlogItemImgContainer>
        <BlogItemCard>
          <BlogItemTitle>
              {title}
          </BlogItemTitle>
          {
              isMounted ? (
                <>
                    <BlogItemDescription dangerouslySetInnerHTML={{__html: description}}></BlogItemDescription>
                    <BlogItemDate>Publicado: {moment(publishedAt).format('DD-MM-YYYY')}</BlogItemDate>
                </>
              ):null
          }
        </BlogItemCard>

      </BlogItemWraper>
    </BlogItemContainer>
  )
}

export default BlogItem;
