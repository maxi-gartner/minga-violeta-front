import { configureStore } from "@reduxjs/toolkit";
import inputs_reducer from './reducers/inputs_filter'

const store = configureStore({
    reducer: {
        inputs: inputs_reducer
    },
})

export default store