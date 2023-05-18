import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/authors&companies";


const { get_authors, get_companies } = actions
let initialState = {
    getAuthors: [],
    getCompanies: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_authors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    getAuthors: action.payload.authors
                }
                return newState
            }
        )
        .addCase(
            get_companies.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    getCompanies: action.payload.companies
                }
                return newState
            }
        )
)

export default reducer