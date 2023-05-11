import { createReducer } from "@reduxjs/toolkit";
import savePageActions from '../actions/saveCurrentPage';
const { saveCurrentPage } = savePageActions

let initial_state = {
    page: 1,
    selectSwitch: 0,
    id_manga: 'hola'
}

const reducer = createReducer(
    initial_state,
    (builder) => builder
                    .addCase(
                        saveCurrentPage,
                        (state, action) => {
                            const new_state = {
                                ...state,
                                page: action.payload.page,
                                selectSwitch: action.payload.selectSwitch,
                                id_manga: action.payload.id_manga
                            }
                            return new_state
                        }
                    )
)

export default reducer