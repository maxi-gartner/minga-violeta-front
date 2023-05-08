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
        <div className="hidden sm:flex h-[25vh] md:h-[30vh] w-fill rounded-md items-end mt-6 relative sm:mx-12" id="colorCarousel" style={gradientStyle}>
            <div className="w-[25%] min-w-fit flex justify-center">
                <img className='auto h-[28vh] md:h-[33vh] ' src={categories[counter]?.character_photo}/>
            </div>
            <div className="w-[25%] min-w-fit flex justify-center">
                <img className='auto h-[25vh] md:h-[30vh] rounded-md mb-4' src={categories[counter]?.cover_photo}/>
            </div>
            <div className='flex-col w-[40%] text-white h-full justify-center items-center sm:px-[2%] lg:px-[5%] flex'>
                <h3 className='not-italic font-normal text-xl leading-[95.19%] self-start grow-0 mb-3'>{categories[counter]?.name.charAt(0).toUpperCase()+categories[counter]?.name.slice(1)} </h3>
                <p className='text-xs font-sans font-normal not-italic leading-[95.19%] self-start'>{categories[counter]?.description}</p>
            </div>
        </div>
    </>
    );
}
