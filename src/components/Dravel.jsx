export default function Dravel() {
    let role = localStorage.getItem('role') ;
    let email = localStorage.getItem('email');
    let photo = localStorage.getItem('photo');

    let authors = "none"
    let mangas = "none"
    let company = "none"

    const viewsButtons = () => {
        console.log(role)
        if(role == 0){
            authors = "flex"
            company = "flex"
        }
        if(role == 0 /* va en 1 en realidad */ || role === 2){
            mangas = "flex"
        }
    }
    viewsButtons()

    const logout = function(){
        localStorage.clear()
        window.location.href="/"
    }

    let subtract = ()=> document.getElementById("dravel").classList.add('hidden');
    return (
        <>
            <div className="hidden flex-col h-screen w-screen sm:w-[400px] bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] z-50 fixed left-0" id='dravel'  /* style={{display:stateDisplay[counter]}} */>
                <div className="w-full p-5 sm:text-xl relative text-white flex">
                    <div className="w-14 h-14 mr-5 rounded-full overflow-hidden ">
                        <a  href="/auth/signin/auth" className="relative">
                            <img className="object-cover w-14 h-14 mr-5 rounded-full overflow-hidden" src={photo} alt="" />
                        </a>
                    </div>
                    <div className="h-14 flex items-center">
                        <p>{email}</p>
                        <svg onClick={subtract} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-10 h-10 absolute right-3 top-3  cursor-pointer"><path d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                </div>
                <div className="w-full">
                    <ul className="flex flex-col justify-between h-[75vh] max-h-[30rem]">
                        <li className="w-full flex justify-center">
                            <a className="bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-[#F472B6] font-bold text-xl" href="/">Home</a>
                        </li>
                        <li className="w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">Mangas</a>
                        </li>
                        <li className="w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">My mangas</a>
                        </li>
                        <li className="w-full flex justify-center">
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="#">Favorites</a>
                        </li>
                        <li className="w-full flex justify-center">
                            <buttom className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" onClick={logout} >Logout</buttom>
                        </li>
                        <li className="w-full justify-center" style={{display: `${authors}`}}>
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="/AuthorRegister/author-form">New Author</a>
                        </li>
                        <li className="w-full justify-center" style={{display: `${mangas}`}}>
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="/manga-form">New Manga</a>
                        </li>
                        <li className="w-full justify-center" style={{display: `${company}`}}>
                            <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="/CompanyForm/CompanyForm">New Company</a>
                        </li>
                    </ul>
                </div>
            </div>
    </>
    );
}
