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
      <button className="hidden sm:flex  border-none  w-56 p-2 justify-center text-xl rounded-lg"  style={{backgroundColor:categories[counter]?.color}}>Sign In!</button>
                <button className="text-[4vw] rounded-full flex border-none  p-[2vw] mt-5 w-[70vw] justify-center text-xl sm:hidden "  style={{backgroundColor:categories[counter]?.color}}>Explore</button>
    </>
  );
}
