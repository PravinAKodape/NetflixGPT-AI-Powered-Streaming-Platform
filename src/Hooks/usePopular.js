
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addPopularMovies } from "../Utils/movieSlice";
import { useSelector } from 'react-redux';


const usePopular = () => {


    const dispatch = useDispatch();

    const popularMovie = useSelector(store => store.movies.popularMovie)


    const getPopularMovies = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)

    const json = await data.json();

    //console.log(json.results);

    dispatch(!popularMovie && addPopularMovies(json.results));

  }

  useEffect(() =>{
    getPopularMovies();
  },[])

};

export default usePopular;
