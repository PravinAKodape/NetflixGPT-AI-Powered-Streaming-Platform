import {createSlice} from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch : false,
        movieResults : null,
        movieName : null,
    },

    reducers: {
        toggleGptSearch: (state , action) =>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state , action) =>{
            const { movieName , movieResults} = action.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;
        }
    },
})

export default gptSlice.reducer;
export const { toggleGptSearch , addGptMovies} = gptSlice.actions;