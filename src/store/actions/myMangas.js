import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api"

const read_mangas = createAsyncThunk('read_mangas', async()=>{
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        let res = await axios.get(apiUrl+"mangas/me", headers)
        return {
            mangas: res.data.response
        }
    } catch (error) {
        return{
            mangas: []
        }
    }
})

const delete_mangas = createAsyncThunk('delete_mangas', async(id)=>{
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        let res = await axios.delete(apiUrl+"mangas/"+id, headers)
        console.log(res);
        return {
            id_manga_delet: id
        }
    } catch (error) {
        return {
            mangas: []
        }
    }
});

const update_mangas = createAsyncThunk('update_mangas', async({id, data})=>{
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        let res = await axios.put(apiUrl+"mangas/"+id,data,headers)
        console.log("res.data.update", res.data.update);
        return{
            data: res.data.update
        }
        
    } catch (error) {
        return{
            mangas: []
        }
    }
})

const actions = { read_mangas ,delete_mangas, update_mangas }

export default actions