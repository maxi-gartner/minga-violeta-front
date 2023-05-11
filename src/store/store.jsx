<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit"
import chapter_reducer from './reducers/chapter_bar'

const store = configureStore({ 
    reducer: {
        data: chapter_reducer
    }
=======
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
>>>>>>> 458e1f0f4ecc804a517f3adb4c89dd910da227d1
})

export default store