import React from 'react'
import FlorO from '../assets/static/img/flor-naranj.png'
import ListOfBlogs from './ListOfBlogs'
import BlogItem from './BlogItem'
import styled from 'styled-components'
import {color_terciario, color_cuaternario, Fuente2, color_principal, color_secundario, Fuente1} from '../assets/styles/lib/Variables';

const ImageFlor = styled.img`

`
const AboutTitle = styled.div`
  margin-top: 280px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-left: 100px;
  padding-right: 100px;
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 87px;
  font-family: ${Fuente2};
  color: ${color_terciario};
  text-align: center;
  -webkit-text-stroke: 2.5px ${color_terciario};
  letter-spacing:0.2rem;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 550px;

  `

const OurBlog = (props) => {
  const reverseBlogs = props.data?.slice().reverse();
  const data = reverseBlogs;
  let datos = [];
  data?.map(( item ) => {
    datos.push(item);
    if(datos[screen.width<601?2:3]){datos.splice(screen.width<601?2:3,1)};
  })
  return(
    <>
      <AboutTitle>
        <ImageFlor src={FlorO} alt="" />
        <Title>De nuestro blog</Title>
        <ImageFlor src={FlorO} alt="" />
      </AboutTitle>
      <AboutContent>
        <ListOfBlogs>
        {
            datos.map(item =>{
              return(
                <BlogItem
                  key={item.id}
                  {...item}
                />
              )
            })
          }
        </ListOfBlogs>
      </AboutContent>
    </>
  )
}

export default OurBlog;
