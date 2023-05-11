import { configureStore } from "@reduxjs/toolkit";
import savePageReducer from './reducers/saveCurrentPage'

const store = configureStore({
    reducer: {
        currentPage: savePageReducer
    }
})

export default store