import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dravel from "../components/Dravel"
import { Outlet } from "react-router-dom";

export default function main(){
    return (
        <>
            <div className='h-full sm:px-0 lg:px-24 bg-[#EBEBEB] text-black' id="layouts" style={styles}>
                <Dravel/>
                <Navbar/>
                    <Outlet />
                <Footer/>
            </div>
        </>
    );
}
