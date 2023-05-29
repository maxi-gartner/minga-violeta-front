import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

const headers = () =>{
    let token = localStorage.getItem('token')
    return { headers: { 'Authorization': `Bearer ${token}` } }
}

const get_categories = createAsyncThunk('get_categories', async () => {
    try {
        let res = await axios(apiUrl + 'categories', headers())
        console.log(res.data.categories)
        return {
            categories: res.data.categories
        }
    } catch (error) {
        return {
            categories: ["error 901"]
        }
    }
})

//const actions = { get_categories }

export default get_categories