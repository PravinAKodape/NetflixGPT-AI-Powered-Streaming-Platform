import Menu from "./Menu";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming"; 
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


const Browse = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcoming();
  

  return (
    <div className=" relative">
     <Menu/>
     { showGptSearch ? <GptSearch/> : (
     <>
     <MainContainer/>
     <SecondaryContainer/>
     </>
     )}
    </div>
  )
}

export default Browse