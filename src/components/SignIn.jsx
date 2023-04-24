import MainImg from '../assets/images/img-main.jpg'

export default function SignIn() {
    return (
    <div className='flex relative w-full overflow-hidden sm:h-[25rem] xl:h-[35rem]'>
            <div className='absolute flex flex-col justify-center items-center sm:items-start text-white h-full w-full bg-black bg-opacity-40  xl:px-20 sm:px-10'>
                <h2 className='font-bold mx-5 text-[9.5vw] xl:text-7xl sm:text-[4vw] mb-2 text-center sm:text-left'>Live the emotion of the manga</h2>
                <p className='text-[5vw] xl:text-2xl sm:text-[3vw] mb-2 mt-3'>Find the perfect manga for you</p>
                <p className='hidden sm:flex font-bold xl:text-2xl sm:text-[3vw] mb-2 '>#MingaForever 🔥</p>
                <button className="hidden sm:flex rounded-none border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-56 p-2 justify-center text-xl">Sign In!</button>
                <button className="text-[4vw] rounded-full flex border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] p-[2vw] mt-5 w-[70vw] justify-center text-xl sm:hidden">Explore</button>
            </div>
            <img className='object-cover w-full hidden sm:flex' src={MainImg}/>
            <img className='object-cover w-full sm:hidden' src='https://ae01.alicdn.com/kf/HTB1FRXmKXXXXXbLXVXXq6xXFXXX5/Living-Room-Decor-Hot-Anime-Naruto-Shippuden-Poster-27x40-cm-Etiqueta-de-La-Pared.jpg_Q90.jpg_.webp'/>
        </div>
    );
}
