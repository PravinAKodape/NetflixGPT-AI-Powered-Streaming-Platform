import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
   
  const Movies = useSelector(store => store.movies)

  return (
    <div className='absolute top-[900px] left-0 bg-black'>
    <div className="  relative -top-[230px] left-0">
      <MovieList title="Now Playing Movies" movies={Movies.nowPlayingMovies} />
      <MovieList title="Top Rated" movies={Movies.topRated} />
      <MovieList title="Popular Movies" movies={Movies.popularMovie} />
      <MovieList title="Upcoming Movie" movies={Movies.upComingMovie} />

    </div>
    </div>
  )
}

export default SecondaryContainer