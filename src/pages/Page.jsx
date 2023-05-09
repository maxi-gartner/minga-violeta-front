import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api' 
import { useParams, useNavigate } from "react-router-dom"


export default function ChapterPages() {
    let { id , page } = useParams()
    const navigate = useNavigate()
    console.log(page)

    const [allPages, setAllPages] = useState([]);
    const [imgPage, setImgPage] = useState("");
    const [counter,setCounter] = useState(parseInt(page));

    useEffect(
        ()=>{ axios(apiUrl+'chapters/'+id)
        .then(res=>{
            setAllPages(res.data.response.pages);
            //setCounter(parseInt(page));
            setImgPage(res.data.response.pages[counter]);
            // console.log(res.data.response.pages)
        })
        .catch(err=>console.log(err))
        }, [counter]
    )

    
    let next = ()  => {
        console.log(counter)
        setCounter(counter + 1)
        if (counter === allPages.length - 1) {
        setCounter(0);
        }
        console.log(counter)
        navigate(`/chapters/${id}/${counter + 1}`);
    }
    
    let prev = () => {
        setCounter(counter - 1);
        if (counter === 0){
        setCounter(allPages.length - 1);
        }
        navigate(`/chapters/${id}/${counter}`);
    }

    useEffect(() => {
        setImgPage(allPages[counter]);

    }, [counter])
    
    

    return (
        <div className='h-screen w-screen flex justify-center'>

                <div className="flex h-fill w-auto rounded-md items-end relative">
                    <button
                    className="w-[20px] h-[20px] absolute left-6 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full z-10 hover:bg-gray-200 
                    bg-white/50 shadow-lg" onClick={prev}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#333333"
                        className="w-[10px] h-[9px] "
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    </button>

                    <button
                    className="w-[20px] h-[20px] absolute right-6 top-[50%] -translate-y-1/2 flex justify-center items-center rounded-full z-10 hover:bg-gray-200 
                    bg-white/50 shadow-lg" onClick={next}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#333333"
                        className="w-[10px] h-[9px] "
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                    </button>

                    
                    
                    <div className="flex justify-center">
                    
                        <img
                            src={imgPage}
                            className=" rounded-md"
                            alt="img2"
                        />
                    
                    </div> 
                </div>
            </div>
    )
    }