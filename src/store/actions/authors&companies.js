import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";

let token = localStorage.getItem('token')
let headers = { headers: { 'Authorization': `Bearer ${token}` } }
const get_authors = createAsyncThunk('get_authors', async () => {
    try {
        let res = await axios(apiUrl + 'authors/admin', headers)
        console.log(res.data.authors)
        return {
            authors: res.data.authors
        }
    } catch (error) {
        return {
            authors: []
        }
    }
})


const get_companies = createAsyncThunk('get_companies', async () => {
    try {
        let res = await axios(apiUrl + 'companies/admin', headers)
        console.log(res.data.companies)
        return {
            companies: res.data.companies
        }

    } catch (error) {
        return {
            companies: []
        }
    }
})

const actions = { get_authors, get_companies }

export default actions