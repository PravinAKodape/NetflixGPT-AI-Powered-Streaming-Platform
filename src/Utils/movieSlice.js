import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        trailerVideo : null,
        topRated : null,
        popularMovie : null,
        upComingMovie : null
    },

    reducers: {

          addNowPlayingMovies: (state , action) =>{
                state.nowPlayingMovies = action.payload;
          },

          addTopRatedMovies: (state , action) =>{
            state.topRated = action.payload;
          },

         addPopularMovies: (state , action) =>{
            state.popularMovie = action.payload;
          },

          addUpcomingMovies: (state , action) =>{
            state.upComingMovie = action.payload;
          },

          addTrailerVideo : (state , action) =>{
                state.trailerVideo = action.payload;
          }
          
    },


})

export default movieSlice.reducer;

export const { addNowPlayingMovies , addTrailerVideo ,addTopRatedMovies ,addPopularMovies,addUpcomingMovies } =  movieSlice.actions;