import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
 
const MovieFromStore = useSelector((store) => store.gpt);
const { movieResults, movieName} = MovieFromStore;

if (!movieName) return null;

  return (
    <div className=" p-3 m-3 bg-black bg-opacity-10">
        {
            movieName.map(
                (movie , index) => {
                    let value = movieResults[index].length < 8 ? movieResults[index] : movieResults[index].slice(0, 8);
                    return <MovieList key={index} title={movie} movies={value}/>
                }
            )
        }
    </div>
  )
}

export default GptMovieSuggestion