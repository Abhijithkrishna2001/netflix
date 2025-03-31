import React, { useEffect, useState } from 'react'
import './RowPosters.css'
import axios from '../../axios'
import {API_KEY, baseUrl, imageUrl } from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPosters(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')
  useEffect(()=>{
      axios.get(props.url).then((response)=>{
        console.log(response.data.results);
        setMovie(response.data.results)
      }).catch(error => console.error("Error fetching movies:", error));
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
    axios.get(`${baseUrl}movie/${id}/videos?api_key=${API_KEY} `).then((response)=>{
      if(response.data.results[0]!=null){
        setUrlId(response.data.results[0].key)
      }else{
        console.log("Array Empty")
      }
    }).catch(error => console.error("Error fetching videos:", error));
  }
  return (
    <div className='row'>
      <h1 className='title'>{props.title}</h1>
      <div className='posters'>
          {
            movie.map((obj,index)=>{
              return(
                <img onClick={()=>handleMovie(obj.id)} key={obj.id} className={props.ismall?'smallPoster':'poster'} src={obj.backdrop_path?`${imageUrl}${obj.backdrop_path}`:'fallback-image.jpg'} alt="poster" />
              )
            })
          }
      </div>
      {urlId?<YouTube videoId={urlId} opts={opts}/>:''}
    </div>
  )
}

export default RowPosters
