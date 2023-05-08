import MainImg from '../assets/images/img-main.jpg'
import ButtonWelcome from './ButtonWelcome';

export default function SignIn() {
    return (
    <div className='flex relative h-screen overflow-hidden sm:h-[61.5vh] lg:h-[56vh] xl:h-[58vh] sm:rounded-ml sm:my-6 sm:flex sm:mx-12 w-fill'>
            <div className='absolute flex flex-col justify-center items-center sm:items-start text-white h-full xl:px-20 sm:px-10 bg-black bg-opacity-40 w-full rounded-md'>
                <h2 className='font-bold text-3xl xl:text-4xl sm:text-3xl mb-2 text-center sm:text-left '>Live the emotion of the manga</h2>
                <p className='text-xl  sm:text-2xl mb-2 mt-3'>Find the perfect manga for you</p>
                <p className='hidden sm:flex font-bold xl:text-2xl sm:text-xl mb-2'>#MingaForever 🔥</p>
                <ButtonWelcome />
            </div>
            <img className='object-cover w-full hidden sm:flex object-top  sm:rounded-md' src={MainImg}/>
            <img className='object-cover w-full sm:hidden' src='https://i.pinimg.com/564x/57/a1/21/57a121180595279d0f3875bf6db0d92d.jpg'/>
        </div>
    );
}
