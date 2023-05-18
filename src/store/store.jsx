import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from './reducers/mangasFilter'
import savePageReducer from './reducers/saveCurrentPage'
import chapter_reducer from './reducers/chapter_bar'
import getData from '../store/reducers/authors&companies'

const store = configureStore({
    reducer: {
        currentPage: savePageReducer,
        data: chapter_reducer,
        inputs: mangasReducer,
        getData: getData
        }
})

export default store