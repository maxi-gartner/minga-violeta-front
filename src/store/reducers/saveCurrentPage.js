import { createReducer } from "@reduxjs/toolkit";
import savePageActions from '../actions/saveCurrentPage';
const { saveCurrentPage } = savePageActions

let initial_state = {
    page: 1,
    selectSwitch: 0
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
                                selectSwitch: action.payload.selectSwitch
                            }
                            return new_state
                        }
                    )
)

export default reducer