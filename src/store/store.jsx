import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from './reducers/mangasFilter'
import savePageReducer from './reducers/saveCurrentPage'
import chapter_reducer from './reducers/chapter_bar'
import myMangas_reducer from './reducers/myMangas'

const store = configureStore({
    reducer: {
        currentPage: savePageReducer,
        data: chapter_reducer,
        inputs: mangasReducer,
        myMangas: myMangas_reducer
        }
})  

export default store