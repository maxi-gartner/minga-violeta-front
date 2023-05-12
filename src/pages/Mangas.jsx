import axios from "axios"
import apiUrl from "../../api"
import { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import inputs_filter_actions from '../store/actions/mangasFilter'
import { Link as Anchor } from "react-router-dom"

export default function Mangas() {
    const buscador = useRef('')
    const category_id = useRef('')
    const nextP = useRef()
    const prevP = useRef()
    const {title, categories} = useSelector( store => store.inputs)
    const dispatch = useDispatch()
    const [mangas, setMangas] = useState()
    const [reload, setReload] = useState(false)
    const [categorias, setCategorias] = useState([])
    const [count, setCount] = useState()
    const [pagAct, setNextPag] = useState(1)
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization' : `Bearer ${token}`}}
    const {mangasFilter} = inputs_filter_actions
    console.log(categories)
    useEffect(
        ()=>{
            axios(apiUrl+`mangas?title=${buscador.current.value}&category_id=${categories.join(',')}&order=1&page=${pagAct}`, headers)
                .then(res=>{
                    setMangas(res.data.response)
                    setCount(res.data.count)
                })
                .catch(err => console.log(err))
        },
        [reload, pagAct]
    )
    console.log(count)
    function next() {
        setNextPag(pagAct+1)
    }
    function prev() {
        setNextPag(pagAct-1)
    }
    console.log(mangas)

    useEffect(
        () => {
            axios(apiUrl + 'categories', headers).then(res => setCategorias(res.data.categories)).catch(err => console.log(err))
        },
        []
    )
    
    function capture(){
        dispatch(mangasFilter({
            title: buscador.current?.value,
            categories: Object.values(category_id.current)
                .filter(each => each.checked)
                .map(each => each.value)
        }))
        setReload(!reload)
        console.log(categories)
        console.log(title)
    }
console.log(categories)
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
                        <input type="text" name="title" id="title" defaultValue={title} ref={buscador} onKeyUp={capture} placeholder=" Find your manga here" className="h-full w-full rounded-full text-lg bg-white sm:bg-gray-200 outline-none pl-2" />
                    </form>
                </div>
                <div className="w-full h-auto sm:h-1/3 sm:w-11/12 bg-gray-200 flex justify-center mb-16">
                    <div className="h-auto gap-y-4 rounded-[80px_80px_2px_27px/64px_64px_0px_1px;] m-[-6rem] sm:rounded-[20px_20px_0px_1px;] w-full sm:m-[-4rem] bg-gray-200 p-8 pb-12 sm:pb-10 sm:flex sm:flex-wrap sm:justify-evenly">
                        <h1 className="text-lg font-medium sm:hidden">Explore</h1>
                        <div className="w-full h-[10vh] flex gap-x-4 mt-4 sm:hidden">
                            <div className="bg-[url('/mangasFotito1.png')] bg-cover bg-center bg-black opacity-80 w-1/3 h-full rounded-md flex flex-col justify-end">
                                <div className="w-full text-xs text-white font-normal flex justify-center">Adventurers</div>
                            </div>
                            <div className="bg-[url('/mangasFotito2.png')] bg-cover bg-center bg-black opacity-80 w-1/3 h-full rounded-md flex flex-col justify-end">
                                <div className="w-full text-xs text-white font-normal flex justify-center">Nostalgic</div>
                            </div>
                            <div className="bg-[url('/mangasFotito3.png')] bg-cover bg-center bg-black opacity-80 w-1/3 h-full rounded-md flex flex-col justify-end">
                                <div className="w-full text-xs text-white font-normal flex justify-center">Popular</div>
                            </div>
                        </div>
                        <form ref={category_id} className="w-full flex justify-center mt-4 sm:justify-center lg:justify-start lg:pl-20 xl:pl-24 2xl:pl-28 gap-x-2 sm:gap-x-4">
                            {categorias && categorias.map((category) =>
                                <label htmlFor={category._id} key={category._id} className="hover:shadow-lg hover:border-2 border-white" style={{ height: "2rem", backgroundColor: category.hover, color: category.color, padding: '0.3rem', borderRadius: '16px', fontSize: "12px", textAlign: "center", ...(categories.includes(category._id)? {backgroundColor: category.color, color: "white", boxShadow: `0 0 0 8px ${category.hover}`} : {}) }}>
                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                    <input name="category_id" onClick={capture} defaultChecked={categories.includes(category._id)} style={{ appearance: 'none' }} type="checkbox" value={category._id} id={category._id} />
                                </label>)}
                        </form>
                        {mangas && mangas.length > 0 ? (
                            mangas?.map((manga =>
                                <div key={manga._id} className="w-full h-[20vh] mt-4 sm:mt-6 flex justify-between bg-white rounded-lg shadow-md sm:w-[60%] lg:w-[40%]">
                                    <div className="w-1/2 h-full flex justify-center items-center">
                                        <div className="w-full h-3/4 border-l-4 flex flex-col justify-center" style={{ borderColor: manga.category_id.color }}>
                                            <p className="text-xs xl:text-lg font-semibold ml-1">{manga.title}</p>
                                            <p className="text-xs xl:text-md font-semibold ml-1" style={{ color: manga.category_id.color }}>{manga.category_id.name.charAt(0).toUpperCase() + manga.category_id.name.slice(1)}</p>
                                            <div className="mt-24 ml-8 text-xs bg-green-200 invisible absolute sm:absolute sm:visible inline-block rounded-2xl hover:shadow-md hover:border-2"><Anchor to={"/detailsManga/" + manga._id}><p className="text-green-500 text-xs font-bold p-2 px-6">Read</p></Anchor></div>
                                        </div>
                                    </div>
                                    <img src={manga?.cover_photo} className="w-40 sm:w-60 object-cover h-full rounded-[40px_8px_8px_40px/64px_8px_8px_64px;]" alt="" />
                                </div>
                            ))
                        ) : (
                            <div className="flex justify-center items-center w-full h-[30vh] mt-4"><p className="bg-black opacity-80 rounded-full p-1 lg:p-3 text-white text-center">No manga has been found</p></div>
                        )}
                        <div className="w-full flex justify-center pt-4 text-white">
                            {pagAct == 1 ? null : (<input className="bg-red-400 h-10 w-60 p-2 m-2 rounded-2xl bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] font-semibold hover:shadow-lg hover:border-2" type="button" value="Prev" onClick={prev} ref={prevP}/>)}
                            {pagAct > count-1 ? null : (<input type="button" className="bg-red-400 h-10 w-60 p-2 m-2 rounded-2xl bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] font-semibold hover:shadow-lg hover:border-2" value="Next" onClick={next} ref={nextP}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}