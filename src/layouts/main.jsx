import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function main({ children }){
    return (
        <>
            <div className='xl:mx-24 sm:mx-0 bg-black text-white sm:text-black sm:bg-white'>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </>
    );
}
