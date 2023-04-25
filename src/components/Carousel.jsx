import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'

export default function Carousel() {
    useEffect(
        ()=>{
            axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
        },
        []
    )

    let [categories, setCategories] = useState([])
    let [counter, SetCounter] = useState(0)
    
    let add = ()=> {
        SetCounter(counter + 1)
        if (counter === categories.length-1){
            SetCounter(0)
        }
    }
    let subtract = ()=> {
        SetCounter(counter - 1)
        if (counter === 0){
            SetCounter(categories.length-1)
        }
    }



    return (
        <div className='relative items-center justify-evenly flex-wrap mt-10 mb-[2vw] rounded-lg xl:h-60 hidden sm:flex' id="colorCarousel" style={{backgroundColor:categories[counter]?.color}}>
            <svg onClick={subtract} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute left-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className='h-60 flex items-end justify-around xl:w-6/12 sm:w-10/12 ' >
                <img className='h-64 ' src={categories[counter]?.character_photo}/>
                <img className='h-60 mb-4' src={categories[counter]?.cover_photo}/>
            </div>
            <div className='text-l p-5 px-20 text-white xl:w-6/12 sm:w-10/12 h-40 xl-h-auto'>
                <h3 className='text-4xl'>{categories[counter]?.name.toUpperCase()} </h3>
                <p>{categories[counter]?.description}</p>
            </div>
            <svg onClick={add} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute right-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    );
}
