import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api' 
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import chapter_actions from '../store/actions/chapter_bar'
const {chapter_bar} = chapter_actions

export default function ChapterPages() {
    //styles
    const spanCarousel = "inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 "
    //store
    const dispatch = useDispatch()
    const stateChapters = useSelector( store => store.data)
    const [title, setTitle] = useState(stateChapters.title);
    const [order, setOrder] = useState(stateChapters.order);
    const [id_prev, setIdPrev] = useState();
    const [id_next, setIdNext] = useState();
    const [reload, setReload] = useState(true);
    //rute
    let { id , page } = useParams()
    const navigate = useNavigate()

    const [allPages, setAllPages] = useState([]);
    const [imgPage, setImgPage] = useState("");
    const [counter,setCounter] = useState(parseInt(page));
    const [prevChapterPages, setPrevChapterPages] = useState([]); 

    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}

    useEffect(
        ()=>{ axios(apiUrl+'chapters/'+id, headers)
        .then(res=>{
            setAllPages(res.data.response.pages);
            setTitle(res.data.response.title)
            setOrder(res.data.response.order)
            setImgPage(res.data.response.pages[counter]);
            setIdNext(res.data.id_next)
            setIdPrev(res.data.id_prev)
            dispatch(chapter_bar({
                title: res.data.response.title,
                order: res.data.response.order
            })) 
        })
        .catch(err=>console.log(err))
        }, [reload]
    )

    // useEffect para obtener las paginas del capitulo anterior
    useEffect(() => {
        if (allPages.length > 0 && counter === 0 && id_prev) {
          const prevChapterId = id_prev;
          axios(apiUrl + 'chapters/' + prevChapterId, headers)
            .then((res) => {
              const prevChapterPages = res.data.response.pages;
              setPrevChapterPages(prevChapterPages); 
            })
            .catch((err) => console.log(err));
        }
      }, [allPages, counter, id_prev]);

    //carousel
    const next = ()  => {
        let newCounter = counter + 1
        if (newCounter >= allPages.length) {
            newCounter = 0
            setCounter(newCounter)
            navigate(`/chapters/${id_next}/${newCounter}`);
            setReload(!reload)
        } else {
            setCounter(newCounter)
            dispatch(chapter_bar({
                title: title,
                order: order
            })) 
            navigate(`/chapters/${id}/${newCounter}`);
        }
    }

    //nuevo funcion previuos
    const {id_manga} = useSelector(store => store.currentPage)
    const previous = () => {
        let newCounter = counter - 1;
        if (counter === 0) {
          if (id_prev && prevChapterPages.length > 0) {
            newCounter = prevChapterPages.length - 1;
            setCounter(newCounter);
            navigate(`/chapters/${id_prev}/${newCounter}`);
            setReload(!reload);
            return;
          } else {
            navigate(`/DetailsManga/${id_manga}`);
            return;
          }
        }
        setCounter(newCounter);
        navigate(`/chapters/${id}/${newCounter}`);
      };

    useEffect(() => {
        setImgPage(allPages[counter]);
    }, [counter])
    

    return (
        <>
        <div className='h-[80%] flex justify-center flex-col pt-[16vh] md:pt-[12vh] lg:pt-[15vh]'>
            <div className="flex justify-center h-fill w-full">
                <img
                            src={imgPage}
                            className="h-[80vh] rounded-md"
                            alt="img2"
                        />
                <button type="button" className="flex absolute top-0 left-0 z-30 justify-start items-center px-4 h-full w-[50%] cursor-pointer group focus:outline-none" data-carousel-prev onClick={previous}>
                    <span className={spanCarousel}>
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="hidden">Previous</span>
                    </span>
                </button>
                <button type="button" className="flex absolute top-0 right-0 z-30 justify-end items-center px-4 h-full w-[50%] cursor-pointer group focus:outline-none" data-carousel-next onClick={next}>
                    <span className={spanCarousel}>
                        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="hidden">Next</span>
                    </span>
                </button> 
                </div>
                <div className='flex justify-center w-fill py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-[30px] h-[22px] bg-white rounded-md">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <p className='mx-2'>42</p>
                </div>
            </div>
        </>   
    )
}