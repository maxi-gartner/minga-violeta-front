import Star from '../assets/images/Star.png'
import LogoTop from '../assets/images/img-logo-top.png'
import LogoBottom from '../assets/images/img-logo-bottom.png'
import Minga from '../assets/images/Minga.png'

export default function Navbar() {
    return (
    <div className='flex w-full justify-between items-center px-5 pb-10 pt-5 h-16 absolute z-50 sm:relative'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12  h-12 text-[#F472B6] mt-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        <div className='flex relative mt-8 sm:mt-14'>
            <img className='ml-[0.08rem] mt-5 w-12 sm:mt-1 sm:w-20' src={Star}/>
            <div className='bg-black absolute top-9 sm:top-9 p-1'>
                <img className='w-12 sm:w-20' src={Minga}/>
                </div>
                <div className='bg-black absolute top-2 left-4 p-[0.2rem] sm:p-0 sm:top-0 sm:left-7 sm:px-1 sm:pt-1'>
                <img  className='w-3 sm:w-4' src={LogoTop}/>
                </div>
                <div className='bg-black absolute top-12 left-4 p-[0.2rem] sm:p-0 sm:top-14 sm:py-1 sm:left-7 sm:px-1'>
                <img  className='w-3 sm:w-4' src={LogoBottom}/>
                </div>
            </div>
        </div>
    );
}
