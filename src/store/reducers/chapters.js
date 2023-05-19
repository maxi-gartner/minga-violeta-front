import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/chapters.js";
const { read_chapters, read_mangas, delete_chapters, update_chapters } = actions

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
    .addCase(
        delete_chapters.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                chapters: state.chapters.filter(each => each._id!=action.payload.id_delete)
            }
            return newState
        }
    ) 
    .addCase(
        update_chapters.fulfilled,
        (state,action)=> {
            let newState = {
                ...state,
                chapters: state.chapters.map(each => {
                    if(each._id === action.payload.data._id){
                        return action.payload.data
                    }
                    else {
                        return each
                    }
                })
            }
            return newState
        }
    ) 
)

export default reducer