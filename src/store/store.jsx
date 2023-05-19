import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from './reducers/mangasFilter'
import savePageReducer from './reducers/saveCurrentPage'
import chapter_reducer from './reducers/chapter_bar'
import authorsReducer from '../store/reducers/authors'
import companiesReducer from '../store/reducers/companies'

const store = configureStore({
    reducer: {
        currentPage: savePageReducer,
        data: chapter_reducer,
        inputs: mangasReducer,
        authors: authorsReducer,
        companies: companiesReducer
        }
})

export default store