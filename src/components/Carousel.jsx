import img1 from '../assets/images/img-carousel.png'
import img2 from '../assets/images/img2-carousel.png'

export default function Carousel() {
    return (
        <div className='relative items-center justify-evenly flex-wrap mt-10 mb-[2vw] bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] rounded-lg xl:h-60 hidden sm:flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute left-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className='h-60 flex items-end justify-around xl:w-6/12 sm:w-10/12 ' >
                <img className='w-60 ' src={img1}/>
                <img className='h-60 mb-4' src={img2}/>
            </div>
            <div className='text-l p-5 px-20 text-white xl:w-6/12 sm:w-10/12 '>
                <h3 className='text-4xl'>Shonen </h3>
                <p>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute right-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    );
}
