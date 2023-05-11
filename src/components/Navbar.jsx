import Logo from "../assets/images/Logo.png";
import { useParams } from "react-router-dom";
import { Link as Anchor ,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiUrl from "../../api"
import { useSelector } from "react-redux";


export default function Navbar() {
    const anchorStyles = "text-white hover:bg-white w-11/12 p-2 flex justify-center items-center rounded-lg hover:text-[#F472B6] font-medium text-md mb-3"; 
    const { order, title } = useSelector( store => store.data)
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
    setShowMenu((prevState) => !prevState);
    };

    let display = {};
    let { url } = useParams()
    //console.log(url)

    if (url == "author-form" || url == "CompanyForm") {
        display = { position: "absolute", left: "0", padding: "0vw 5vw" };
    }
    if (url == "auth"|| url == "login") {
        display = { position: "absolute", left: "0" };
    } 
    if (url == "chapter"){
        display = { position: "absolute", left: "0", backgroundColor:"#F472B6" };
    }

    const role = localStorage.getItem("role")
    let token = localStorage.getItem('token')
    let headers = { headers: { 'authorization': `Bearer ${token}` } }
    let email = localStorage.getItem('email')
    let photo = localStorage.getItem('photo')
    const navigate = useNavigate()
            
    function backHome() {
    axios.post(apiUrl + 'auth/signOut', null, headers)
        .then(() => {
        localStorage.clear();
        navigate('/')
        })
        .catch(err => alert(err))
    }

const Drawer = () => {
    return (
    <>
        <div className="absolute top-0 left-0 sm:w-[400px] bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] h-screen w-screen py-2 z-20" id="dravel">
            <div className="w-full p-5 sm:text-xl relative text-white flex">
                <div className="mr-5 overflow-hidden flex items-center">
                    <Anchor to="/auth/signin/auth" className="relative" onClick={handleMenuClick}>
                    {!token && <img
                        className="object-cover w-14 h-14 mr-5 rounded-full overflow-hidden"
                        src={Logo}
                        alt="" />}
                    {token && <img
                        className="object-cover w-14 h-14 mr-5 rounded-full overflow-hidden"
                        src={photo}
                        alt="" />}
                    </Anchor>
                    {token && <div className="flex-col">
                        <p className="text-sm">{email}</p>
                    </div>}
                </div>
                <div className="h-14">
                    <button onClick={handleMenuClick} className="self-center">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-10 h-10 absolute right-3 top-1 sm:top-5  cursor-pointer"
                        >
                        <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <nav className="w-full font-poppins">
                <ul
                onClick={handleMenuClick}
                className="flex flex-col h-[75vh] max-h-[30rem] font-poppins"
                >
                    <li className="w-full flex justify-center">
                        <Anchor className={anchorStyles}
                        to="/">Home</Anchor>
                    </li>
                    <li className="w-full flex justify-center">
                        <Anchor className={anchorStyles}
                        to="/">Mangas</Anchor>
                    </li>
                    {!token && <li className="w-full flex justify-center"><Anchor className={anchorStyles} to="/auth/signup/login">Register</Anchor></li>}
                    {!token && <li className="w-full flex justify-center"><Anchor className={anchorStyles} to="/auth/signin/auth" >Login</Anchor></li>}
                    {token && <li className="w-full flex justify-center"><Anchor className={anchorStyles} to="#">My mangas</Anchor></li>}
                    {token && <li className="w-full flex justify-center"><Anchor className={anchorStyles} to="#">Favorites</Anchor></li>}
                    {token && <li className="w-full flex justify-center cursor-pointer"><a className={anchorStyles} onClick={backHome}>Sign Out</a></li>}
                    {role == 0 ?(<li className="w-full flex justify-center"><Anchor className={anchorStyles} to="/AuthorRegister/author-form">New Author</Anchor></li>) : ("")}
                    {role == 0 ?(<li className="w-full flex justify-center"><Anchor className={anchorStyles} to="/CompanyForm/CompanyForm">New Company</Anchor></li>) : ("")}
                    {role == 1 || role == 2 ? (<><li className="w-full flex justify-center"><Anchor className={anchorStyles} to="/manga-form">New mangas</Anchor></li></>) : ("")}
                
                </ul>
            </nav>
        </div>
    </>
    );
};

return (
    
    <div className="flex w-full justify-between items-center absolute z-40 sm:relative pl-4 sm:px-12 pt-2" style={display} >
        <button onClick={handleMenuClick}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={url === "chapter" ? "#fff" : "currentColor"}
            className="w-10 h-10 text-[#F472B6] cursor-pointer rounded-lg"
            /* style={hamburger} */
            id="hamburger">
            
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
            </svg>
        </button>
        { url == "chapter" ? (<><p className='flex justify-center items-center text-white w-full h-[14vh] md:h-[9vh] lg:h-[12vh]'>{order} - {title}</p></>):("")}
        <Anchor to="/" className="flex relative text-white pr-4 sm:pr-0">
            <img className="w-[58px] h-auto md:w-[62px] md:h-auto" src={Logo} />
        </Anchor>
        {showMenu && <Drawer />}
    </div>
    
);
}
