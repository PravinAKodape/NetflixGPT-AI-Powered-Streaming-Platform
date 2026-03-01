import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import logger from 'redux-logger'


const appStore = configureStore({
      reducer : { 
        user : userSlice,
        movies : movieSlice,
        gpt : gptSlice
      } ,

      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default appStore;