import { createAction } from "@reduxjs/toolkit";

const inputsCheked = createAction(
    'inputsCheked', (objeto)=> {
        return{
            payload: {
                categoriesCheked:objeto.categoriesCheked,
            }
        }
    }
)

const actions = { inputsCheked }
export default actions