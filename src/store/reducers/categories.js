import { createReducer } from "@reduxjs/toolkit";
import get_categories from "../actions/categories";

//const { get_categories } = categories

let initialState = {
    categories: []
}

const categories_reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_categories.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    categories: action.payload.categories,
                }
                return newState
            }
        )
)

export default categories_reducer