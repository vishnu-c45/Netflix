import React,{useEffect, useState} from 'react'
import {Api_key,Image_url} from '../../cosnstants/constants'
import axios from '../../axios'
import "./Banner.css"

function Banner() {
  const [movie,setMOvie]=useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${Api_key}`).then((response)=>{
      console.log(response.data.results[0])
      setMOvie(response.data.results[1])
     
    })
  }, [])
  return (
    <div style={{backgroundImage: `url(${movie ?Image_url+movie.backdrop_path:""})`}} className='banner'>
        <div className="content">
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
        <h1 className='desc'>{movie ? movie.overview:""}</h1>
        </div>

        <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
