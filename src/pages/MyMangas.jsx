import axios from "axios"
import { useEffect, useState } from "react";
import apiUrl from "../../api"

export default function MyMangas() {
    const [manga, setManga] = useState()
    useEffect(() => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        axios.get(apiUrl+"mangas/me",null, headers).then(res=> setManga(res.data.response)).catch(err => console.log(err))
    }, []
    )
    console.log(manga);

  return (
    <div>
      <p>Pagina my mangas</p>
    </div>
  );
}
