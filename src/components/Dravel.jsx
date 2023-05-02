import axios from "axios";

const res = await axios.get(`http://localhost:8000/auth/read`);
let allUsers = await res.data.users
//console.log(allUsers);
localStorage.setItem('userLoged', JSON.stringify(allUsers.find(element=> element.email === "maxi.gartner@hotmail.com")));
const data = JSON.parse(localStorage.getItem('userLoged'));

export default function Dravel() {
    let authors = "none"
    let mangas = "none"
    const viewsButtons = () => {
        if(data.role === 0){
            authors = "flex"
        }
        if(data.role === 1 || data.role === 2){
            mangas = "flex"
        }
    }
    viewsButtons()

    let subtract = ()=> document.getElementById("dravel").classList.add('hidden');
    return (
        <>
            <div className="hidden flex-col h-screen w-screen sm:w-[400px] bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] z-50 fixed left-0" id='dravel'  /* style={{display:stateDisplay[counter]}} */>
                <div className="w-full p-5 text-xl relative text-white flex">
                    <div className="w-14 h-14 mr-5 rounded-full overflow-hidden  shadow-[0px_0px_40px_4px_rgba(0,0,0,0.56)]">
                        <img src={data.photo} alt="" />
                    </div>
                    <div>
                        <p className=" font-medium">Gartner Maximiliano</p>
                        <p>{data.email}</p>
                        <svg onClick={subtract} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-10 h-10 absolute right-3 top-3  cursor-pointer"><path d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="flex flex-col">
                        <li className="py-5 w-full flex justify-center">
                            <a className="bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-[#F472B6] font-bold text-xl" href="#">Home</a>
                        </li>
                        <li className="py-5 w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">Mangas</a>
                        </li>
                        <li className="py-5 w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">My mangas</a>
                        </li>
                        <li className="py-5 w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">Favorites</a>
                        </li>
                        <li className="py-5 w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">Logout</a>
                        </li>
                        <li className="py-5 w-full justify-center" style={{display: `${authors}`}}>
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="/AuthorRegister/author-form">New Author</a>
                        </li>
                        <li className="py-5 w-full justify-center" style={{display: `${mangas}`}}>
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">New Manga</a>
                        </li>
                    </ul>
                </div>
            </div>
    </>
    );
}
