import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'

export default function ButtonSingIn() {

  useEffect(
      ()=>{
          axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
      },
      []
  )

  let [categories, setCategories] = useState([])
  let [counter, SetCounter] = useState(0)
  
  useEffect(
      ()=>{
          const interval = setInterval( () =>{
              SetCounter( (counter) => (counter +1) % 4);
          }, 5000);
          return () => clearInterval(interval)
      }, [])

  return (

    
    <>
      <a href="/auth/signin/auth" className="text-[4vw] rounded-full border-none  p-[2vw] mt-5 w-[70vw] justify-center text-xl flex  sm:border-none  sm:w-56 sm:p-2 sm:justify-center sm:text-xl sm:rounded-lg"  style={{backgroundColor:categories[counter]?.color}}>Sign In!</a>
    </>
  );
}
