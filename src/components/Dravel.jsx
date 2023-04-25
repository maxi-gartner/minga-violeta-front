export default function Dravel() {

    let changeDisplay = ()=> {
        let dravel = document.getElementById("dravel");
        dravel.classList.add('hidden');
    }
    
    return (
    <div className="hidden flex-col h-screen w-screen sm:w-[640px] bg-[#f472b5f9] z-50 absolute left-0" id='dravel'>
        <div className="w-full p-5 text-xl relative">
            <p>Gartner Maximiliano</p>
            <p>maxi.gartner@hotmail.com</p>
            <svg onClick={changeDisplay} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-10 h-10 absolute right-3 top-3"><path d="M6 18L18 6M6 6l12 12" />
</svg>
        </div>
        <div className="w-full">
            <ul className="flex flex-col">
                <li className="py-5 w-full flex justify-center">
                    <a className="bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-[#F472B6] font-bold text-xl" href="#">Home</a>
                </li>
                <li className="py-5 w-full flex justify-center">
                    <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="">Mangas</a>
                </li>
                <li className="py-5 w-full flex justify-center">
                    <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="">My mangas</a>
                </li>
                <li className="py-5 w-full flex justify-center">
                    <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="">Favorites</a>
                </li>
                <li className="py-5 w-full flex justify-center">
                    <a className="hover:bg-white w-3/4 h-12 flex justify-center items-center rounded-lg text-white  hover:text-[#F472B6] font-bold text-xl" href="">Logout</a>
                </li>
            </ul>
        </div>
    </div>
    );
}
