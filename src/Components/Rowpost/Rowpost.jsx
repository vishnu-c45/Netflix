import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Row.css"
import YouTube from 'react-youtube'
import axios from 'axios'
import { Image_url,Api_key } from '../../cosnstants/constants'

function Rowpost(props) {
  const [movie,setmovie]=useState([])
  const [url,setUrl]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      //console.log(response.data)
      setmovie(response.data.results)
    }).catch(err=>{
     // alert('Network error')
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handle_movie=(id)=>{
   console.log(id)
   axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${Api_key}&=`).then(response=>{
    console.log(response.data)
    if(response.data.results.length!==0){
      setUrl(response.data.results[0])
    }
   })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>

        <div className='posters'>
          {movie.map((obj)=>
            <img onClick={()=>handle_movie(obj.id)} className={props.issmall ?'smallposter': 'poster'} src={`${Image_url+obj.backdrop_path}`} alt="poster" />
          )}
            
       
            
        </div>
       { url && <YouTube opts={opts} videoId={url.key}/>}
      
    </div>
  )
}

export default Rowpost
