import { createReducer } from "@reduxjs/toolkit";
import inputsActions from '../actions/inputsCheked'
const { inputsCheked } = inputsActions

let initial_state = {
    categoriesCheked: [],
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
        .addCase(        //reduce los datos y modifica el estado
        inputsCheked,
            (state,action) => {
                const new_state = {
                    ...state,
                    categoriesCheked: action.payload.categoriesCheked
                }
                return new_state
            }
        )
)

export default reducer