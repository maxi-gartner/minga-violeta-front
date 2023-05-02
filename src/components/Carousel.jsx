import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import '../App.css'


export default function Carousel() {
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

        const gradientStyle = {backgroundImage: `linear-gradient(153deg, rgb(255, 255, 255) -13.9%, ${categories[counter]?.color} 58.69%)`,
        }

    return (
    <>
        <div className='relative items-center justify-evenly flex-col xl:flex-row my-[2vw] rounded-lg xl:h-[30vh] hidden sm:flex shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] h-[40vh]' id="colorCarousel" style={gradientStyle}>
            <div className='h-[30vh] flex items-end justify-around xl:w-6/12 w-10/12 pb-16 xl:pb-0' >
                        <img className='h-[33vh] ' src={categories[counter]?.character_photo}/>
                        <img className='h-[32vh] mb-[4vh] shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] rounded-lg' src={categories[counter]?.cover_photo}/>
            </div>
            <div className='text-l p-5 xl:px-20 text-white xl:w-6/12 w-11/12 h-[18vh] absolute bottom-0 flex flex-col justify-end xl:relative xl:justify-center'>
                <h3 className='text-4xl'>{categories[counter]?.name.charAt(0).toUpperCase()+categories[counter]?.name.slice(1)} </h3>
                <p>{categories[counter]?.description}</p>
            </div>
        </div>
    </>
    );
}
