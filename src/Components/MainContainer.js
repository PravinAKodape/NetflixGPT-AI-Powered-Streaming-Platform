import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

 const movies = useSelector(store => store.movies?.nowPlayingMovies ); // WILL have 20 movies

 if(movies === null ) return;

 const mainMovie = movies[0];    // will take first for main movie
 //console.log(mainMovie); 

 const { original_title , overview , id} = mainMovie;

  return (
    <div className=' absolute -top-16 right-0'>
        <VideoTitle title ={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer