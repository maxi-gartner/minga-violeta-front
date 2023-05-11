import { createAction } from "@reduxjs/toolkit";

const mangasFilter = createAction(
    'mangasFilter', (objeto)=> {
        return{
            payload: {
                title:objeto.title,
                categories:objeto.categories,
            }
        }
    }
)

const actions = { mangasFilter }
export default actions