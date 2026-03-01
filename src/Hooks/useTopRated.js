
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useSelector } from 'react-redux';


const useTopRated = () => {


    const dispatch = useDispatch();

    const MovieTopRated = useSelector(store => store.movies.topRated)


    const getTopRatedMovies = async () =>{

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)

    const json = await data.json();

    //console.log(json.results);

    dispatch(!MovieTopRated && addTopRatedMovies(json.results));

  }

  useEffect(() =>{
    getTopRatedMovies();
  },[])

};

export default useTopRated;

