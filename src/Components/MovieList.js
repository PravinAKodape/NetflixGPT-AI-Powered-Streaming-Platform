import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {

    //console.log(title)
    //console.log(movies)
  return (
    <div className='px-10' >
        <h1 className=' mb-10 mt-28 text-white text-2xl font-bold'>{title}</h1>
        
        <div className=' flex'> {movies && movies?.map(( movie)=> <MovieCard id={movie.id} path={movie.poster_path}/> )}</div>
        
    </div>
  )
}

export default MovieList