import { createAsyncThunk } from "@reduxjs/toolkit";
//import { useParams } from "react-router-dom"
import apiUrl from "../../../api";
import axios from "axios";

let token = localStorage.getItem('token')
let headers = {headers:{'Authorization':`Bearer ${token}`}}


const read_chapters = createAsyncThunk('read_chapters', async({id_manga})=>{
    
    try {
        console.log(id_manga)
        let response = await axios(apiUrl+'chapters/me?manga_id='+id_manga, headers)
        console.log(response)
    
        return {
            chapters: response.data.response
        }

    } catch(error) {
        return {
            chapters: []
        }
        
    }
})

const read_mangas = createAsyncThunk('read_mangas', async({id_manga})=>{
    
    try {
        console.log(id_manga)
        let response = await axios(apiUrl+'mangas/'+id_manga, headers)
        console.log(response)
    
        return {
            mangas: response.data.response.title
        }

    } catch(error) {
        return {
            mangas: []
        }
        
    }
})

const actions = {read_chapters , read_mangas}
export default actions