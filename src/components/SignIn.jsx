import MainImg from '../assets/images/img-main.jpg'
import ButtonSingIn from './ButtonSingIn';

export default function SignIn() {
    return (
    <div className='flex relative h-screen overflow-hidden sm:h-[55vh] sm:rounded-t-lg '>
            <div className='absolute flex flex-col justify-center items-center sm:items-start text-white h-full w-full bg-black bg-opacity-40  xl:px-20 sm:px-10'>
                <h2 className='font-bold mx-5 text-[11.5vw] xl:text-5xl sm:text-[4vw] mb-2 text-center sm:text-left'>Live the emotion of the manga</h2>
                <p className='text-[6vw] xl:text-2xl sm:text-[3vw] mb-2 mt-3'>Find the perfect manga for you</p>
                <p className='hidden sm:flex font-bold xl:text-2xl sm:text-[3vw] mb-2 '>#MingaForever 🔥</p>
                <ButtonSingIn/>
            </div>
            <img className='object-cover w-full hidden sm:flex object-top  sm:rounded-t-lg' src={MainImg}/>
            <img className='object-cover w-full sm:hidden' src='https://ae01.alicdn.com/kf/HTB1FRXmKXXXXXbLXVXXq6xXFXXX5/Living-Room-Decor-Hot-Anime-Naruto-Shippuden-Poster-27x40-cm-Etiqueta-de-La-Pared.jpg_Q90.jpg_.webp'/>
        </div>
    );
}
