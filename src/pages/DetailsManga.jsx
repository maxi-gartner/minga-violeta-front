import axios from "axios"
import { useEffect, useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import apiUrl from "../../api"
import saveCurrentPageActions from '../store/actions/saveCurrentPage'
import icon_comment from "../../public/icon_comment.png"
const {saveCurrentPage} = saveCurrentPageActions
const emojiButton = "text-4xl rounded-full h-16 w-16 bg-white shadow-[0px_2px_5px_rgba(0,0,0,0.56)]"; 

export default function DetailsManga(){
    const [manga, setManga] = useState()
    let { id } = useParams();
    useEffect(() => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
        axios.get(apiUrl+"mangas/"+id, headers).then(res=> setManga(res.data.response)).catch(err => console.log(err))
    }, []
    )
    return (
        <>
            <div className="min-h-screen pt-[12vh] sm:pt-2 bg-[#EBEBEB] flex flex-col items-center sm:flex-row">
                {<img className="max-h-[50vh] sm:max-h-none sm:h-screen object-cover object-top w-full px-5 sm:w-1/2 sm:flex" src={manga?.cover_photo}></img>}
                <div className="min-h-screen w-screen px-5 bg-[#EBEBEB] flex flex-col items-center sm:w-1/2 sm:flex">
                    <div>
                        {<p className="text-5xl sm:text-2xl lg:text-5xl pt-5">{manga?.title}</p>}
                    </div>
                    <div className="flex justify-between my-3 w-[100%]">
                        {<p className="flex items-center px-4 rounded-full text-lg shadow-[0px_0px_4px_rgba(0,0,0,0.16)]" style={{background: manga?.category_id.hover, color: manga?.category_id.color}}>{manga?.category_id.name}</p>}
                        {<p className="p-2 text-2xl text-[#9D9D9D]">{`${manga?.company_id.name}`}</p>}
                    </div>
                    <div className="w-[100%] flex justify-evenly">
                        <button className={emojiButton}>👍</button>
                        <button className={emojiButton}>👎</button>
                        <button className={emojiButton}>😮</button>
                        <button className={emojiButton}>😍</button>
                    </div>
                    <div className="w-[100%] bg-white m-5 shadow-[0px_2px_5px_rgba(0,0,0,0.56)] rounded-xl flex justify-around p-2 items-center">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl">4.5/5</p>
                            <p className="text-xs">Rating</p>
                        </div>
                        <div className="w-[2px] h-8 bg-slate-400"></div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl">265</p>
                            <p className="text-xs">Chapters</p>
                        </div>
                        <div className="w-[2px] h-8 bg-slate-400"></div>
                        <div className="flex flex-col items-center">
                            <p className="text-2xl">Eng</p>
                            <p className="text-xs">Lenguage</p>
                        </div>
                    </div>
                        <SwitchButton/>
                </div>
            </div>
        </>
    )
}
const SwitchButton = () =>{
    const {page} = useSelector(store => store.currentPage)
    const {selectSwitch} = useSelector(store => store.currentPage)

    const dispatch = useDispatch()
    let { id } = useParams();

    const [pages, setPages] = useState(1)
    const [disablePrev, setDisablePrev] = useState(true);
    const [disableNext, setDisableNext] = useState(false);
    const [chapters, setChapters] = useState()
    const [manga, setManga] = useState()
    const [Switchs, setSelectSwitch] = useState(0)
    
    const handlePage = (increment) => {
        if (increment){
            
    //console.log(chapters?.length);
            setPages(pages +1)
            dispatch(saveCurrentPage({
                page: pages+1
            }))
            if (pages=== 2){
                setDisableNext(true)
            }
            if (pages=== 1){
                setDisablePrev(false)
            }
            
        }else{
            setPages(pages -1)
            dispatch(saveCurrentPage({
                page: page-1
            }))
            if (pages=== 1 || page === 2){
                setDisablePrev(true)
            }
            if (pages=== 2){
                setDisableNext(false)
            }
            
        }
    }
    useEffect(() => {
                    let token = localStorage.getItem('token')
                    let headers = { headers: { 'Authorization': `Bearer ${token}`} }
                    axios.get(apiUrl+"mangas/"+id, headers).then(res=> setManga(res.data.response)).catch(err => console.log(err))
                    axios(apiUrl+`chapters?manga_id=${id}&page=${page}`, headers).then(res=> setChapters(res.data.chapters)).catch(err => console.log(err))
                }, [page]
                )
    const handleSwitch = (change) => {
        if (change){
            dispatch(saveCurrentPage({
                selectSwitch: Switchs-1
            }))
            setSelectSwitch(0)
        }else{
            dispatch(saveCurrentPage({
                selectSwitch: Switchs+1
            }))
            setSelectSwitch(1)
        }
    }
    return(
        <div className="h-[38rem] w-full">
            <div className="h-10 rounded-full m-5 shadow-[0px_1px_5px_rgba(0,0,0,0.56)] flex items-center">
                <button onClick={()=> handleSwitch(true)}
                        className="h-full w-[50%] rounded-full flex items-center justify-center" 
                        style={{background: selectSwitch==0? 'linear-gradient(153deg, #F9A8D4 -13.9%, #F472B6 58.69%)' : 'transparent'}
                        }><span 
                            style={{color: selectSwitch==0? 'white' : '#9D9D9D'}}>Manga</span></button>
                <button onClick={()=> handleSwitch(false)}
                        className="h-full w-[50%] rounded-full flex items-center justify-center" 
                        style={{background: selectSwitch==0? 'transparent' : 'linear-gradient(153deg, #F9A8D4 -13.9%, #F472B6 58.69%)'}
                        }><span 
                            style={{color: selectSwitch==0? '#9D9D9D' : 'white'}}>Chapters</span></button>
            </div>
            
            {selectSwitch == 0 ? 
                (<div className="w-[100%] sm:h-full sm:flex sm:items-top sm:pb-20">
                    <p className="pb-10 sm:text-lg lg:text-xl xl:text-2xl">{manga?.description}</p>
                </div>) : 
                (
                    <div className="w-full h-full pb-24 flex flex-col justify-between lg:px-10 xl:px-20">
                    <div>
                    {chapters?.map(element => {
                        return <div className=" flex w-full max-h-28 h-[35vw] py-5 justify-between" key={element.order}>
                            <img className="w-20 object-cover object-top" src={element.cover_photo} alt="" />
                            <div className="max-w-[5rem] max-h-[5rem] sm:max-w-none sm:flex sm:flex-col justify-between sm:px-1">
                                <h3 className="text-center">{element.title}</h3>
                                <div className="flex justify-around">
                                    <img src={icon_comment} alt="" />
                                    <p>{(Math.random()*100).toFixed()}</p>
                                </div>
                            </div>
                            <Anchor to="/DENISE-PONER-RUTA-DE-TU-PAGINA/" className="max-w-[10rem] min-w-[8rem] rounded-full flex items-center justify-center text-white max-h-40 text-[20px] px-2 font-bold" style={{background: 'linear-gradient(153deg, #F9A8D4 -13.9%, #F472B6 58.69%)'}}>Chapters</Anchor>
                        </div>
                    })}
                    </div>
                    <div className="flex justify-around items-center pb-1">
                        <button onClick={()=> handlePage(false)} disabled={disablePrev}><svg className="h-[3rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
                        </svg></button>
                        <p>Page: {page}</p>
                        <button onClick={()=> handlePage(true)} disabled={disableNext}><svg className="h-[3rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
                        </svg></button> 
                    </div>
                    </div>
                )
            }
            
        </div>
    )
}