import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from './reducers/mangasFilter'
import savePageReducer from './reducers/saveCurrentPage'
import chapter_reducer from './reducers/chapter_bar'
import chapters_reducer from './reducers/chapters'
import authorsReducer from '../store/reducers/authors'
import companiesReducer from '../store/reducers/companies'
import myMangas_reducer from './reducers/myMangas'
import inputsCheked from './reducers/inputsCheked'
import categories_reducer from "./reducers/categories";

const store = configureStore({
        reducer: {
                chapters: chapters_reducer,
                currentPage: savePageReducer,
                data: chapter_reducer,
                inputs: mangasReducer,
                authors: authorsReducer,
                companies: companiesReducer,
                myMangas: myMangas_reducer,
                inputsCheked: inputsCheked,
                categories: categories_reducer
        }
})  

export default store