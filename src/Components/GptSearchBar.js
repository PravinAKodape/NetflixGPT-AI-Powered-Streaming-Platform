import { useRef } from "react";
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../Utils/gptSlice";

const GptSearchBar = () => {

    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTmdb= async (movie)=> {
         const searchMovie = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS)
         const  getMovie = await searchMovie.json();
         
         return getMovie.results;
         
    };

    const handleGptSearch= async () => {

            const Searching = "Act as movie suggesting system and search for" + searchText.current.value + " Please provied 5 movies only separated by commas. such as result : sholay , Lagaan , 3 idiots, Hum , Welcome";
            console.log(Searching);
            //This part is commented out necause exausted api hit limitations
            // const chatCompletion = await openai.chat.completions.create({
            //   messages: [{ role: 'user', content: Searching }],
            //   model: 'gpt-3.5-turbo',
            // });

            // console.log(chatCompletion.choices);
            const MoviesToShow = ["Hera Pheri" , "Hum" ,"3 Idiots" ,"All IS WELL" , "HERO"]

            const promiseArray = MoviesToShow.map(movie =>searchMovieTmdb(movie));

            const tmdbResult = await Promise.all(promiseArray)
            console.log(tmdbResult)
            dispatch(addGptMovies( {movieName: MoviesToShow , movieResults : tmdbResult}));
          
    };


  return (
    <div className="pt-[10%] flex justify-center rounded-lg">
       <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e=>e.preventDefault())}>
             <input ref={searchText} className="p-4 m-4 col-span-9 h-12" type="text" placeholder="What would you like to watch today ?" />
             <button className=" col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearch}>Search</button>
       </form>
    </div>
  )
}

export default GptSearchBar