import { configureStore } from "@reduxjs/toolkit"
import chapter_reducer from './reducers/chapter_bar'

const store = configureStore({ 
    reducer: {
        data: chapter_reducer
    }
})

export default store