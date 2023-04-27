import Logo from '../assets/images/Logo.png'
//import { useState } from "react"; 

export default function Navbar() {

/*     let stateDisplay = ['flex','none']

    let [counter, SetCounter] = useState(0)
    
    let add = ()=> {
        SetCounter(counter + 1)
        if (counter === stateDisplay.length-1){
            SetCounter(0)
        }
        document.getElementById("dravel").style.display = stateDisplay[counter];
        //document.getElementById("dravel").style.setAttribute("style", `display = ${stateDisplay[counter]}`);
    } */
    
    let add = ()=> document.getElementById("dravel").classList.remove('hidden');

    return (
        <div className='flex w-full justify-between items-center px-5 pb-10 pt-5 h-[10vh] mb-[5vh] xl:h-[12vh] absolute z-40 sm:relative'>
        <svg onClick={add}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12  h-12 text-[#F472B6] mt-14 cursor-pointer">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        <div className='flex relative mt-14 text-white font-medium'>
                <img className='ml-[0.08rem] mt-1 w-20 mr-1' src={Logo}/>
            </div>
        </div>
    );
}
