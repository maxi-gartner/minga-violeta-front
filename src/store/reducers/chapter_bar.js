import { createReducer } from "@reduxjs/toolkit";
//importo las acciones
import chapter_actions from '../actions/chapter_bar'
//desestructuro las acciones que necesito configurar
const { chapter_bar } = chapter_actions
//defino estado inicial
let initial_state = {
    title: '',
    order: ''
}

const reducer = createReducer(
    initial_state,
    (builder)=> builder
    .addCase(
        chapter_bar,
        (state, action) => {
            const new_state = {
                ...state,
                title: action.payload.title,
                order: action.payload.order
            }
            return new_state
        }
        
    )
)
export default reducer