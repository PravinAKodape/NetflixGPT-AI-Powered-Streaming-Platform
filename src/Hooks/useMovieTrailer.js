import { useEffect } from 'react';
import { API_OPTIONS } from '../Utils/constant';
import {addTrailerVideo} from '../Utils/movieSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";



const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch(); 

    const MovieTrailer = useSelector(store => store.movies.trailerVideo)

    const getMovieVideos = async () =>{
 
     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
     const json = await data.json();
     //console.log(json);
 
     const filterData = json.results.filter( (video)=> video.type === "Trailer");
     //console.log(filterData);
 
     const trailer = filterData.length ? filterData[0] : json.results[0];
     //console.log(trailer);
 
     dispatch(!MovieTrailer && addTrailerVideo(trailer));
 
   }
 
   useEffect(()=>{
     getMovieVideos();
   },[])
 
}

export default useMovieTrailer