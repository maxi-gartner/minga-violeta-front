import apiUrl from "../../api";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import inputs_filter_actions from '../store/actions/mangasFilter'
import { Link as Anchor } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function AdminPanel(){
    
    const [view, setView] = useState(false)

    function handleClick() {
        setView(!view)
        console.log(view)
    }

    return(
        <>
            <div className="w-full h-auto flex flex-col items-center">
                <div className="w-full h-[50vh] flex flex-col justify-center items-center bg-adminPanel-bg bg-cover bg-top sm:h-[60vh]">
                    <h1 className="text-white text-3xl sm:text-4xl mb-8 sm:text-white font-bold">Panel</h1>
                </div>
                <div className="w-full h-auto sm:h-1/3 md:w-11/12 bg-gray-200 flex justify-center mb-16">
                    <div className="h-auto gap-y-4 rounded-[80px_80px_2px_27px/64px_64px_0px_1px;] m-[-6rem] sm:rounded-[20px_20px_0px_1px;] w-full sm:m-[-4rem] bg-white p-8 pb-12 sm:pb-10 sm:flex sm:flex-wrap sm:justify-evenly">
                        <div className="flex flex-col justify-center items-center w-full pt-8">
                            <p className="text-3xl font-extrabold text-pink-400">Entities</p>
                            <div className="bg-pink-300 h-2 w-28 mr-4 mb-16"></div>
                            
                            <div className="lg:w-[55%] w-full h-auto bg-gray-100 border-2 border-gray-200 shadow-sm rounded-[10px_10px_5px_5px] mb-8">
                                <div className="w-full border-b-2 border-pink-400 rounded-[10px_10px_5px_5px]">
                                    <button className={`${view ? 'w-1/2 bg-gray-100 justify-center text-pink-400 font-bold cursor-pointer' : 'h-[6vh] w-1/2 bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] rounded-[10px_0px_0px_0px] text-white font-bold cursor-pointer pointer-events-none' } `}>
                                    <label htmlFor="" className="flex flex-row justify-center w-full" onClick={handleClick}>
                                        Companies
                                        <input type="checkbox" className="" style={{ appearance: 'none' }} value="hola" name="hola"/>
                                        
                                    </label>
                                    </button>
                                    <button className={`${view ? 'h-[6vh] w-1/2 bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] rounded-[0px_10px_0px_0px] text-white font-bold cursor-pointer pointer-events-none' : 'w-1/2 bg-gray-100 justify-center text-pink-400 font-bold cursor-pointer'} `}>
                                    <label htmlFor="" className="flex flex-row justify-center w-full" onClick={handleClick}>
                                        Authors
                                        <input type="checkbox" className="" style={{ appearance: 'none' }} value="hola" name="hola"/>
                                        
                                    </label>
                                    </button>
                                </div>
                                {view === false ?
                                    (
                                        <div className="flex flex-col h-auto w-full">
                                            <div className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2 border-2 border-gray-100 border-b-2">
                                                <table className="w-full flex flex-row justify-center">
                                                    <tbody className="w-full">
                                                        <tr className="flex flex-wrap justify-evenly gap-3 w-full sm:w-full sm:flex sm:flex-row sm:justify-between">
                                                            <td className="flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" className="w-6 h-6 fill-pink-400">
                                                                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                                                </svg>
                                                                <p>Blue Team</p>
                                                            </td>
                                                            <td>
                                                                <p className="w-full sm:w-auto sm:inline-block text-center">www.blueteam.com.ar</p>
                                                            </td>
                                                            <td>
                                                                <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src="https://s3-alpha-sig.figma.com/img/05ac/d9be/f5df0a61815dd84dc569e2b26dc459f8?Expires=1685318400&Signature=qjiDEQ9lmUuCif5p8nrO2W43geSftfp0AY4VIyjSdlsglpH4KrqQDQb9g9HhGo1zckVvdjOa8Q4YxVMZBlh4F-di~i2Xp-yqEYxxjiTNEHfTUSDP1pi5mvnkOk0kKItnyoMEiYErS-R42KbX18uOLPKvQqkIse45Rk06e0fi-lzKD0qDD7og7FTOM9VUmak3LNpPxidOgiYeKtx-XYJOUFOj8FxNaWoIlgN0-axNOUaGSlVHzoROsJjg6CpZWBxi~hhMsFPiAlqRyBeuGSsr-eX7ZjPeniZSMgYA3JeLz24m6nJNYdl0FralIAUGFKNFSDIIJUELEQcZGtDGo5JsQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                                            </td>
                                                            <td>
                                                                <label className="relative inline-flex items-center cursor-pointer">
                                                                    <input type="checkbox" value="" className="sr-only peer" />
                                                                    <div className="w-5 h-3 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:right-[10px] after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[0.5rem] after:w-[0.5rem] after:transition-all dark:border-gray-600 peer-checked:bg-pink-400"></div>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col h-auto w-full">
                                            <div className="h-auto w-full flex flex-wrap justify-center items-center sm:flex sm:justify-between sm:items-center p-2 border-2 border-gray-100 border-b-2">
                                                <table className="w-full flex flex-row justify-center">
                                                    <tbody className="w-full">
                                                        <tr className="flex flex-wrap w-full gap-3 sm:w-full sm:flex sm:flex-row sm:justify-between">
                                                            <td className="flex">
                                                                <svg className="h-6 w-6 text-pink-400 fill-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                                <p>Lucas Ezequiel Silva</p>
                                                            </td>
                                                            <td>
                                                                <p className="">16/02/2000</p>
                                                            </td>
                                                            <td>
                                                                <p className="">Caseros</p>
                                                            </td>
                                                            <td>
                                                                <img className="w-6 h-6 rounded-full mr-2 sm:mr-0" src="https://s3-alpha-sig.figma.com/img/05ac/d9be/f5df0a61815dd84dc569e2b26dc459f8?Expires=1685318400&Signature=qjiDEQ9lmUuCif5p8nrO2W43geSftfp0AY4VIyjSdlsglpH4KrqQDQb9g9HhGo1zckVvdjOa8Q4YxVMZBlh4F-di~i2Xp-yqEYxxjiTNEHfTUSDP1pi5mvnkOk0kKItnyoMEiYErS-R42KbX18uOLPKvQqkIse45Rk06e0fi-lzKD0qDD7og7FTOM9VUmak3LNpPxidOgiYeKtx-XYJOUFOj8FxNaWoIlgN0-axNOUaGSlVHzoROsJjg6CpZWBxi~hhMsFPiAlqRyBeuGSsr-eX7ZjPeniZSMgYA3JeLz24m6nJNYdl0FralIAUGFKNFSDIIJUELEQcZGtDGo5JsQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                                                            </td>
                                                            <td>
                                                                <label className="relative inline-flex items-center cursor-pointer">
                                                                    <input type="checkbox" value="" className="sr-only peer" />
                                                                    <div className="w-5 h-3 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:right-[10px] after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[0.5rem] after:w-[0.5rem] after:transition-all dark:border-gray-600 peer-checked:bg-pink-400"></div>
                                                                </label>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    ) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}