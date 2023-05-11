import { configureStore } from "@reduxjs/toolkit";
import inputs_reducer from './reducers/inputs_filter'
import chapter_reducer from './reducers/chapter_bar'

const store = configureStore({
    reducer: {
        inputs: inputs_reducer,
        data: chapter_reducer
    }
})

export default store