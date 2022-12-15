import React from 'react';
import useFetch from 'react-fetch-hook';
import Link from './Link';
import styled from 'styled-components';
import {color_terciario, Fuente1} from '../assets/styles/lib/Variables'

/*Cuando se usa React con webpack y para usar variables de entorno se deben instalar algunas dependencias.(ver https://www.youtube.com/watch?v=YnoM2ouosZo) y 
y configurar en webpack.config.js
*/
const TOKEN_IG = process.env.REACT_APP_TOKEN_INSTAGRAM;

const ListImages = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  justify-content: center;

`
const ItemContainer = styled.div`
  margin: 4px;
  background-color: black;
  padding: 5px 5px 5px 5px;
  width:286px;
  height: 286px;
  display: flex;
  flex-direction: column;
  transition: all 250ms ease;
  &:hover{
    box-shadow: ${color_terciario} 0px 10px 15px -5px;
    transform: translateY(-2%);
  }
`

const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
  object-position: center center;
`

const Instagram = (props) => {
  const { data } = useFetch(`https://graph.instagram.com/me/media?access_token=${TOKEN_IG}&fields=id, caption, media_type, media_url, permalink, thumbnail_url, timestamp, username`)
  if (data){
    const instaPosts = slimUpPosts(data)
    let images = [];
    for (let i=0; i<12; i++){
      images.push(instaPosts[i])
    }
    return(
      <>
        <ListImages>
          {images.map(({ thumbnail, caption, media_url, type}, index) => {
            return(
                <ItemContainer key={index}>
                  <Image key={index} src={thumbnail} onClick={(e)=> props.openModal(caption, media_url, type, e)}/>
                  {type==="VIDEO"&&<PlayImg src={PlayIcon} />}
                </ItemContainer>
            )
          })}
        </ListImages>
      </>
    )
  }
    return(<h1>Loading...</h1>)
}

function slimUpPosts(response){
  return response.data.map(node => {
    let caption = node.caption
    let media = node.media_type=="VIDEO"?node.thumbnail_url:node.media_url
    return {
      thumbnail: media,
      url: node.permalink,
      caption,
      id: node.id,
      media_url: node.media_url,
      type: node.media_type
    }
  })
}

export default Instagram;
