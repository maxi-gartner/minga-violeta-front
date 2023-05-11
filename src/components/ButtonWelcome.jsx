import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import { Link as Anchor } from "react-router-dom"

export default function ButtonWelcome() {
  let token = localStorage.getItem('token')

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
          {token ? (
            <>
              <Anchor to="/mangas/page"><button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4" style={{backgroundColor:categories[counter]?.color}}>Explore Mangas!</button></Anchor>
            </>
          ) : (
            <Anchor  to="/auth/signin/login"><button className="text-white not-italic font-medium text-2xl leading-[95.19%] bg-gradient-to-r from-btn1 from-(-13.10%) to-btn2 to-58.69% rounded-md flex flex-row justify-center items-center gap-2.5 w-60 h-[55px] p-4" style={{backgroundColor:categories[counter]?.color}}>Sign in</button></Anchor>
          )
          }
        </>
      )
    }

