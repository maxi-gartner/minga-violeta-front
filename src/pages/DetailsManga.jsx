import axios from "axios"
//import apiUrl from "../../api"
import { useEffect, useState } from "react";
import apiUrl from "../../api"
//console.log(apiUrl);

const idLink = "6455251e7468e2153e947d4b"


let token = localStorage.getItem('token')
let headers = { headers: { 'Authorization': `Bearer ${token}` } }
const resManga = await axios.get(apiUrl+"mangas/"+idLink, headers) || [];
const manga = resManga.data.response


const emojiButton = "text-4xl rounded-full h-16 w-16 bg-white shadow-[0px_2px_5px_rgba(0,0,0,0.56)]"; 
export default function DetailsManga(){
    
    return (
        <>
            <div className="min-h-screen pt-[12vh] bg-[#EBEBEB] flex flex-col items-center">
                <img className="max-h-[50vh] object-cover object-top w-full px-5" src={manga.cover_photo} alt={"https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg"}></img>
                <div className="min-h-screen w-screen px-5 bg-[#EBEBEB] flex flex-col items-center">
                    <div>
                        <p className="text-5xl pt-5">{manga.title}</p>
                    </div>
                    <div className="flex justify-between my-3 w-[100%]">
                        <p className="flex items-center px-4 rounded-full text-lg shadow-[0px_0px_4px_rgba(0,0,0,0.16)]" style={{background: manga.category_id.hover, color: manga.category_id.color}}>{manga.category_id.name}</p>
                        <p className="p-2 text-2xl text-[#9D9D9D]">{`${manga.company_id.name}`}</p>
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
    const [chapters, setChapters] = useState()
    const [page, setPages] = useState(1)
    useEffect(() => {
                    let token = localStorage.getItem('token')
                    let headers = { headers: { 'Authorization': `Bearer ${token}`} }
                    axios(apiUrl+`chapters?manga_id=${idLink}&page=${page}`, headers).then(res=> setChapters(res.data.chapters)).catch(err => console.log(err))
                }, [page]
                )
                const handlePage = (increment) => {
                    if (increment){setPages(page +1)
                        if (page=== 3) {setPages(0)}
                    }else{setPages(page -1)
                        if (page===0) {setPages(3)}
                    }
                }

    const [selectSwitch, setSelectSwitch] = useState(0)
    return(
        <div className="h-[38rem] w-full">
            <div className="h-10 rounded-full m-5 shadow-[0px_1px_5px_rgba(0,0,0,0.56)] flex items-center">
                <button onClick={()=> setSelectSwitch(0)} 
                        className="h-full w-[50%] rounded-full flex items-center justify-center" 
                        style={{background: selectSwitch==0? 'linear-gradient(153deg, #F9A8D4 -13.9%, #F472B6 58.69%)' : 'transparent'}
                        }><span 
                            style={{color: selectSwitch==0? 'white' : '#9D9D9D'}}>Manga</span></button>
                <button onClick={()=> setSelectSwitch(1)} 
                        className="h-full w-[50%] rounded-full flex items-center justify-center" 
                        style={{background: selectSwitch==0? 'transparent' : 'linear-gradient(153deg, #F9A8D4 -13.9%, #F472B6 58.69%)'}
                        }><span 
                            style={{color: selectSwitch==0? '#9D9D9D' : 'white'}}>Chapters</span></button>
            </div>
            
            {selectSwitch == 0 ? 
                (<div className="w-[100%]">
                    <p className="pb-2 pt-5 text-2xl">{manga.title}</p>
                    <p className="pb-10">{manga.description}</p>
                </div>) : 
                (
                    <div className="w-full h-full pb-24 flex flex-col justify-between">
                    <div>
                    {chapters?.map(element => {
                        return <div className=" flex w-full max-h-28 h-[35vw] py-5 justify-between" key={element.order}>
                            <img className="w-20 object-cover object-top" src={element.cover_photo} alt="" />
                            <div className="max-w-[5rem] max-h-[5rem]">
                                <h3>{element.title}</h3>
                                <div className="flex justify-around">
                                    <img src="./icon_comment.png" alt="" />
                                    <p>{(Math.random()*100).toFixed()}</p>
                                </div>
                            </div>
                            <button className="max-w-[10rem] min-w-[8rem] rounded-full flex items-center justify-center text-white max-h-40 text-[20px] px-2 font-bold" style={{background: 'linear-gradient(153deg, #F9A8D4 -13.9%, #F472B6 58.69%)'}}>Chapters</button>
                        </div>
                    })}
                    </div>
                    <div className="flex justify-around items-center">
                        <button onClick={()=> handlePage(false)}><svg className="h-[3rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"></path>
                        </svg></button>
                        <svg className="h-[3rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                        </svg>
                        <button onClick={()=> handlePage(true)}><svg className="h-[3rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"></path>
                        </svg></button> 
                    </div>
                    </div>
                )
            }
            
        </div>
    )
}