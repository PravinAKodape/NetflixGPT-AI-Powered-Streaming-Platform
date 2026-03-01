import React from 'react'
import { IMG_CDN } from '../Utils/constant'

const MovieCard = ({path}) => {
  if(!path) return null;
  return (
    <div className=' w-48 h-52 mx-2'>
        <img src={IMG_CDN + path} alt="posters" />
    </div>
  )
}

export default MovieCard