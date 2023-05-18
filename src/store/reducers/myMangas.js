import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/myMangas";
<<<<<<< HEAD
const { read_mangas, delete_mangas, update_mangas } = actions;
=======
const { read_mangas, delete_mangas } = actions;
>>>>>>> 7a525bf8e3d0f0928fd4ce46c95c3b173d928e47

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
<<<<<<< HEAD
        .addCase(
            update_mangas.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    mangas: state.mangas.map(each => {
                        if(each._id === action.payload.data._id){
                            return action.payload.data
                        } else {
                            return each
                        }
                    })
                }
                return newState
            }
        )
=======
>>>>>>> 7a525bf8e3d0f0928fd4ce46c95c3b173d928e47
    }
)

export default reducer