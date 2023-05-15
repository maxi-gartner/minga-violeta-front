import { createReducer } from "@reduxjs/toolkit";
import mangasActions from '../actions/mangasFilter'
const { mangasFilter } = mangasActions

let initial_state = {
    title: '',
    categories: [],
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(        //reduce los datos y modifica el estado
            mangasFilter,
            (state,action) => {
                const new_state = {
                    ...state,
                    title: action.payload.title,
                    categories: action.payload.categories
                }
                return new_state
            }
        )
)

export default reducer