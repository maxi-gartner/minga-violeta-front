import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dravel from "../components/Dravel"

export default function main({ children }){
    return (
        <>
            <div className='h-full sm:mx-0 lg:mx-24 xl:mx-52 bg-black text-white sm:text-black sm:bg-white'>
                <Dravel/>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    );
}
