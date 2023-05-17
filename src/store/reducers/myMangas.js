import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/myMangas";
const { read_mangas, delete_mangas } = actions;

let initial_state = {
    mangas: []
}

const reducer = createReducer(
    initial_state,
    builder=> {
        builder
        .addCase(
            read_mangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    mangas: action.payload.mangas
                }
                return newState
            }
        )
        .addCase(
            delete_mangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    mangas: state.mangas.filter(each=> each._id!== action.payload.id_manga_delet)
                }
                return newState
            },
        )
    }
)

export default reducer