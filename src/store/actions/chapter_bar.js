import { createAction } from "@reduxjs/toolkit"

const chapter_bar = createAction (
    'chapter_bar', //nombre de la acción
    (object) => { //función que va a enviar datos al reductor
        return { //el objeto debe tener todas las propiedades a guardarse en el estado global
            payload: {
                title: object.title,
                order: object.order
            }
        }
    }
)
const actions = {chapter_bar}
export default actions