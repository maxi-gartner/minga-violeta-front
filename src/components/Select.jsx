import { useState, useEffect } from "react"

export default function Select() {
    useEffect(
        ()=>{
            axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
        },
        []
    )

    let [categories, setCategories] = useState([])
    console.log(categories)

    return (
        <select onClick={fetchData} name="categories" id="select" className="form-control">
            <option value="">Insert Category</option>
            <option value="">{categories}</option>
        </select>
    )
}
