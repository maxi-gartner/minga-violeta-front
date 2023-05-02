import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dravel from "../components/Dravel"
import { Outlet } from "react-router-dom"

export default function main(){
    return (
        <>
            <div className='h-full sm:mx-0 lg:mx-24 xl:mx-52 bg-black text-white sm:text-black sm:bg-white'>
                <Dravel/>
                <Navbar/>
                    <Outlet />
                <Footer/>
            </div>
        </>
    );
}
