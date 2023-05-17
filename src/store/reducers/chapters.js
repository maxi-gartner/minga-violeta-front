import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/chapters.js";
const { read_chapters, read_mangas } = actions

let initialState = {
    chapters: [],
    mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
    .addCase(
        read_chapters.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                chapters: action.payload.chapters
            }
            return newState
        }
    )
    .addCase(
        read_mangas.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                mangas: action.payload.mangas
            }
            return newState
        }
    ) 
)

export default reducer