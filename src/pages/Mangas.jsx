import axios from "axios"
import apiUrl from "../../api"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Mangas() {
    let { id } = useParams()
    const [mangas, setMangas] = useState()
    useEffect(
        ()=>{
            let token = localStorage.getItem('token')
            axios(apiUrl+'mangas?title=pro&category_id=6455251c7468e2153e947d24').then(res=>setMangas(res.data.response)).catch(err=>console.log(err))
        },
        []
    )
    console.log(mangas)
    return (
        <>
            <div className="w-full h-auto flex flex-col items-center">
                <div className="w-full h-[50vh] flex flex-col justify-center items-center bg-mangasGirlM bg-cover bg-top sm:bg-mangasGirlD sm:bg-cover sm:bg-top sm:h-[60vh]">
                    <h1 className="text-white text-3xl sm:text-4xl mb-8 sm:text-white font-bold">Mangas</h1>
                    <form className="flex justify-center rounded-full items-center bg-white sm:bg-gray-200 w-72 sm:w-2/3 h-14 sm:h-10 mb-4">
                        <label type="button" className="ml-4">
                            <svg className="w-8 h-8" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16.9584" cy="17.4584" r="10.7917" stroke="#F472B6" strokeWidth="2" />
                                <path d="M30.8333 31.3333L26.2083 26.7083" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </label>
                        <input type="search" placeholder=" Find your manga here" className="h-full w-full rounded-full text-lg bg-white sm:bg-gray-200" />
                    </form>
                </div>
                <div className="w-full h-auto sm:h-1/3 sm:w-11/12 bg-gray-200 flex justify-center mb-20">
                    <div className="h-auto gap-y-4 rounded-[80px_80px_2px_27px/64px_64px_0px_1px;] m-[-6rem] sm:rounded-[20px_20px_0px_1px;] w-full sm:m-[-4rem] bg-gray-200 p-8 sm:flex sm:flex-wrap sm:justify-evenly">
                        <h1 className="text-lg font-medium sm:hidden">Explore</h1>
                        <div className="w-full h-[10vh] flex gap-x-4 mt-4 sm:hidden">
                            <div className="bg-mangasFotito1 bg-cover bg-center bg-black opacity-80 w-1/3 h-full rounded-md flex flex-col justify-end">
                                <div className="w-full text-xs text-white font-normal flex justify-center">Adventurers</div>
                            </div>
                            <div className="bg-mangasFotito2 bg-cover bg-center bg-black opacity-80 w-1/3 h-full rounded-md flex flex-col justify-end">
                                <div className="w-full text-xs text-white font-normal flex justify-center">Nostalgic</div>
                            </div>
                            <div className="bg-mangasFotito3 bg-cover bg-center bg-black opacity-80 w-1/3 h-full rounded-md flex flex-col justify-end">
                                <div className="w-full text-xs text-white font-normal flex justify-center">Popular</div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between mt-4 sm:justify-start sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24 2xl:pl-28">
                            <div className="bg-gray-500 inline-block rounded-2xl invisible absolute sm:relative sm:visible sm:mr-4"><p className="text-white text-xs p-1">All</p></div>
                            <div className="bg-red-200 inline-block rounded-2xl sm:mr-4"><p className="text-red-400 text-xs p-1">Shōnen</p></div>
                            <div className="bg-orange-200 inline-block rounded-2xl sm:mr-4"><p className="text-orange-400 text-xs p-1">Seinen</p></div>
                            <div className="bg-green-200 inline-block rounded-2xl sm:mr-4"><p className="text-green-400 text-xs p-1">Shōjo</p></div>
                            <div className="bg-violet-200 inline-block rounded-2xl sm:mr-4"><p className="text-violet-400 text-xs p-1">Kodomo</p></div>
                            <svg className="w-6 h-6 inline-block sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F472B6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                            </svg>
                        </div>
                        <div className="w-full h-[20vh] mt-4 flex justify-between bg-white rounded-lg shadow-md sm:w-[40%]">
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-full h-3/4 border-4 border-l-orange-400 flex flex-col justify-center">
                                    <p className="text-xs font-semibold">Naruto: And That's Why You're Disqualified!! #8</p>
                                    <p className="text-xs text-orange-400">Type</p>
                                    <div className="mt-24 ml-8 text-xs text-green-400 invisible absolute sm:absolute sm:visible inline-block rounded-2xl"><p className="text-green-500 text-xs font-bold p-1">Read</p></div>
                                </div>
                            </div>
                            <img src="../../mangasFotito4.png" className="w-30 h-full rounded-[40px_8px_8px_40px/64px_8px_8px_64px;]" alt="" />
                        </div>
                        <div className="w-full h-[20vh] mt-4 flex justify-between bg-white rounded-lg shadow-md sm:w-[40%]">
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-full h-3/5 border-4 border-l-orange-400 flex flex-col justify-center">
                                <p className="text-xs font-semibold">Naruto: And That's Why You're Disqualified!! #8</p>
                                    <p className="text-xs text-orange-400">Type</p>
                                </div>
                            </div>
                            <img src="../../mangasFotito5.png" className="w-30 h-full rounded-[40px_8px_8px_40px/64px_8px_8px_64px;]" alt="" />
                        </div>
                        <div className="w-full h-[20vh] mt-4 flex justify-between bg-white rounded-lg shadow-md sm:w-[40%]">
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-full h-3/5 border-4 border-l-orange-400 flex flex-col justify-center">
                                <p className="text-xs font-semibold">Naruto: And That's Why You're Disqualified!! #8</p>
                                    <p className="text-xs text-orange-400">Type</p>
                                </div>
                            </div>
                            <img src="../../mangasFotito5.png" className=" w-30 h-full rounded-[40px_8px_8px_40px/64px_8px_8px_64px;]" alt="" />
                        </div>
                        <div className="w-full h-[20vh] mt-4 flex justify-between bg-white rounded-lg shadow-md sm:w-[40%]">
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-full h-3/5 border-4 border-l-orange-400 flex flex-col justify-center">
                                <p className="text-xs font-semibold">Naruto: And That's Why You're Disqualified!! #8</p>
                                    <p className="text-xs text-orange-400">Type</p>
                                </div>
                            </div>
                            <img src="../../mangasFotito5.png" className=" w-30 h-full rounded-[40px_8px_8px_40px/64px_8px_8px_64px;]" alt="" />
                        </div>
                        <div className="w-full h-[20vh] mt-4 flex justify-between bg-white rounded-lg shadow-md sm:w-[40%]">
                            <div className="w-1/2 h-full flex justify-center items-center">
                                <div className="w-full h-3/5 border-4 border-l-orange-400 flex flex-col justify-center">
                                <p className="text-xs font-semibold">Naruto: And That's Why You're Disqualified!! #8</p>
                                    <p className="text-xs text-orange-400">Type</p>
                                </div>
                            </div>
                            <img src="../../mangasFotito5.png" className=" w-30 h-full rounded-[40px_8px_8px_40px/64px_8px_8px_64px;]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}