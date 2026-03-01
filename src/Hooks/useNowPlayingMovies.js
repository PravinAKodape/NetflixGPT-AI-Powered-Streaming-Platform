
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useSelector } from 'react-redux';


const useNowPlayingMovies = () => {


    const dispatch = useDispatch();

    const nowPlayingMovie = useSelector(store => store.movies.nowPlayingMovies)


    const getNowPlayingMovies = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)

    const json = await data.json();

    //console.log(json.results);

    dispatch(!nowPlayingMovie && addNowPlayingMovies(json.results));

  }

  useEffect(() =>{
    getNowPlayingMovies();
  },[])

};

export default useNowPlayingMovies;

