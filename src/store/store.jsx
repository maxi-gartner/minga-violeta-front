import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from './reducers/mangasFilter'
import savePageReducer from './reducers/saveCurrentPage'
import chapter_reducer from './reducers/chapter_bar'

const store = configureStore({
        reducer: {
                inputs: mangasReducer,
                currentPage: savePageReducer,
                data: chapter_reducer
        }
})

export default store