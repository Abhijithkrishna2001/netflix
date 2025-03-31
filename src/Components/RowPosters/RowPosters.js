import React, { useEffect, useState } from 'react'
import './RowPosters.css'
import axios from '../../axios'
import {API_KEY, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPosters(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
        console.log(response.data.results);
        setMovie(response.data.results)
      })
  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      origin: window.location.origin,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY} `).then((response)=>{
      if(response.data.results[0]!=null){
        setUrlId(response.data.results[0].key)
      }else{
        console.log("Array Empty")
      }
    })
  }
  return (
    <div className='row'>
      <h1 className='title'>{props.title}</h1>
      <div className='posters'>
          {
            movie.map((obj,index)=>{
              return(
                <img onClick={()=>handleMovie(obj.id)} key={obj.id} className={props.ismall?'smallPoster':'poster'} src={imageUrl+obj.backdrop_path} alt="poster" />
              )
            })
          }
      </div>
      {urlId?<YouTube videoId={urlId} opts={opts}/>:''}
    </div>
  )
}

export default RowPosters
