<<<<<<< HEAD
import  { useRef, useState } from "react"
import axios from "axios";
import apiUrl from "../../api"
import ModalMinga from "../components/ModalMinga"
=======
import { useRef } from "react";
import axios from "axios";
import apiUrl from "../../api"
>>>>>>> c01f716cf0cfdf2665d2ba486d873f59c28b8c99
const data = JSON.parse(localStorage.getItem('userLoged')) || [];

export default function AuthorForm(){
  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const birthdate = useRef()
  const img = useRef()
  function handleForm(e){
    const user = JSON.parse(localStorage.getItem('userLoged')) || [];
    e.preventDefault()
    let dataCity =  country.current.value.split(',')[0]
    let dataCountry =  country.current.value.split(',')[1]
    let data = {
      name: name.current.value,
      last_name: lastName.current.value,
      city: dataCity,
      country:dataCountry,
      date: birthdate.current.value,
      photo: img.current.value,
      active: true,
      user_id: user._id
    }
    console.log(data);
    axios.post(apiUrl+"authors", data)
<<<<<<< HEAD
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


=======
    .then(res=> console.log("mensaje de res correcto", res.data))
    .catch(err=> console.log("mensaje de res INcorrecto", err.response.data))
  }

>>>>>>> c01f716cf0cfdf2665d2ba486d873f59c28b8c99

  return (
    <div className="flex h-screen">
      <img src="../../img-authors.jpg" alt="" className="hidden sm:w-1/2 sm:flex object-cover object-top"/>
<<<<<<< HEAD
    <div className="bg-[#EBEBEB] w-screen h-screen flex flex-col justify-around pt-32 pb-10 items-center sm:w-1/2 ">
=======
      <div className="bg-[#EBEBEB] w-screen h-screen flex flex-col justify-around pt-[10vh] pb-[5vh] items-center sm:w-1/2 ">
>>>>>>> c01f716cf0cfdf2665d2ba486d873f59c28b8c99
        <h1 className="text-black text-3xl ">New Author</h1>
        <div className="mr-5 h-24 w-24 sm:h-36 sm:w-36 rounded-full overflow-hidden shadow-[0px_0px_20px_4px_rgba(0,0,0,0.56)]">
          <img src={data.photo} alt="" />
        </div>
        <form onSubmit={handleForm}  className="text-black h-2/3 flex flex-col justify-between pb-5 w-full px-[15vw] sm:px-[5vw] xl:px-[10vw]">
          <div className="grid h-full py-5">
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_first_name" 
                        id="floating_first_name" 
                        ref={name}  
                        placeholder="First name"  
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_first_name"></label>
            </div>
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_first_name" 
                        id="floating_first_name" 
                        ref={lastName} 
                        placeholder="Last name"  
                        autoComplete="off" 
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_first_name"></label>
            </div>
            <div className="flex flex-col">
                <input  type="text" 
                          name="floating_last_name" 
                          id="floating_last_name" 
                          ref={country} placeholder="City and country (Comma separated)" 
                          autoComplete="off"  
                          required 
                          className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_last_name"></label>
            </div>
            <div className="flex flex-col">
                <input type="date" 
                        name="floating_last_name" 
                        id="floating_last_name" 
                        ref={birthdate} 
                        placeholder="Birthdate" 
                        required 
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_last_name"></label>
            </div>
            <div className="flex flex-col">
                <input type="text" 
                        name="floating_last_name" 
                        id="floating_last_name" 
                        ref={img} 
                        placeholder="URL Profile Image" 
                        required 
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" />
                <label htmlFor="floating_last_name"></label>
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
        </form>
      </div>
<<<<<<< HEAD
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
=======
>>>>>>> c01f716cf0cfdf2665d2ba486d873f59c28b8c99
    </div>
  );
}
