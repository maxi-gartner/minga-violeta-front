import  { useRef, useState } from "react"
import axios from "axios";
import apiUrl from "../../api"
import ModalMinga from "../components/ModalMinga"
let photo = localStorage.getItem('photo');

export default function AuthorForm(){
const name = useRef()
const website = useRef()
const logo = useRef()
const description = useRef()
function handleForm(e){
    e.preventDefault()
    let data = {
        name: name.current.value,
        logo: logo.current.value,
        website: website.current.value,
        description: description.current.value,
        active: true
    }
    console.log(data);
    axios.post(apiUrl+"companies", data)
.then(res =>{
    console.log(res)
    setModalSuccessIsOpen(true)
}) 
.catch(err => {
    console.error(err.response.data.message)
    setErrorMessage(err.response.data.message.map(message => message))
    setModalErrorIsOpen(true)
})
}

const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);
const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
const [errorMessage, setErrorMessage] = useState([]);

const successModal = () => {
return (
    <div>
    <div className="p-4">
        <h2 className="font-semibold">Success</h2>
        <p>Chapter created successfully!</p>
    </div>
    </div>
);
};

const errorModal = () => {
return (
    <div>
    <div className="p-4">
        <h2 className="font-semibold">Error</h2>
        {errorMessage.map(message => (
        <div key={message}>{message}</div>
        ))}  
    </div>
    </div>
);
};

const closeModal = () => {
setModalSuccessIsOpen(false);
}

const closeErrorModal = () => {
setModalErrorIsOpen(false);
}


return (
    <div className="flex h-screen">
    <img src="../../img-companies.jpg" alt="" className="hidden sm:w-1/2 sm:flex object-cover object-top"/>
    <div className="bg-[#EBEBEB] w-screen h-screen flex flex-col justify-around pt-32 pb-10 items-center sm:w-1/2 ">
        <h1 className="text-black text-3xl ">New Company</h1>
        <div className="mr-5 h-24 w-24 sm:h-36 sm:w-36 rounded-full overflow-hidden shadow-[0px_0px_20px_4px_rgba(0,0,0,0.56)]">
        <img className="h-full object-cover" src={photo} alt="" />
        </div>
        <form onSubmit={handleForm}  className="text-black h-2/3 flex flex-col justify-between pb-5 w-full px-[15vw] sm:px-[5vw] xl:px-[10vw]">
        <div className="grid h-full py-5">
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_first_name" 
                        id="floating_first_name" 
                        ref={name} 
                        placeholder="Name"  
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_first_name"></label>
            </div>
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_last_name" 
                        id="floating_last_name" 
                        ref={website} 
                        placeholder="Website" 
                        required 
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_last_name"></label>
            </div>
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_last_name" 
                        id="floating_last_name" 
                        ref={logo} 
                        placeholder="URL Profile Image" 
                        required 
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_last_name"></label>
            </div>
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_first_name" 
                        id="floating_first_name" 
                        ref={description} 
                        placeholder="Description"  
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_first_name"></label>
            </div>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
        </form>
    </div>
        {modalSuccessIsOpen && (
            <ModalMinga onClose={closeModal}>
            {successModal()}
            </ModalMinga>
        )}
        {modalErrorIsOpen && (
            <ModalMinga onClose={closeErrorModal}>
            {errorModal()}
            </ModalMinga>
        )}
    </div>
);
}
