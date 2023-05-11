import { createAction } from "@reduxjs/toolkit";

const saveCurrentPage = createAction(
    'saveCurrentPage',          //nombre de la accion
    (objeto)=> {                // funcion que va a enviar datos al reductor
        return{
            payload: {
                page: objeto.page,
                selectSwitch: objeto.selectSwitch,
                id_manga: objeto.id_manga
            }
        }         
    }
)

const actions = { saveCurrentPage }
export default actions