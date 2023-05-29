import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ChatBot from "../components/ChatBot"

import { Outlet } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function Main(){

    let styles = {}
    let {page} = useParams()
    //console.log(page)
    if(page == "author-form" || page == "CompanyForm"){
        //console.log("es igual")
        styles = {padding: "0"}
    }

    return (
        <>
            <div className='h-full w-full bg-[#EBEBEB] text-black' id="layouts" style={styles}>
                <ChatBot/>
                <Navbar/>
                <Outlet/>
                {!window.location.href.includes("donate") && <Footer/>}
            </div>
        </>
    );
}
