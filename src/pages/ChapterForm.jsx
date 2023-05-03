import axios from "axios";
import  { useRef, useState } from "react"
import apiUrl from "../../api"
import { useParams } from "react-router-dom"
import ModalChapter from "../components/ModalChapter"

export default function ChapterForm() {
  let chapterId = useParams()
  console.log(chapterId)
  let title = useRef()
  let order = useRef()
  let pages = useRef()

  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const successModal = () => {
    return (
      <div>
        <div>
          <h2>Success</h2>
          <p>Author created successfully!</p>
        </div>
      </div>
    );
  };

  const errorModal = () => {
    return (
      <div>
        <div>
          <h2>Error</h2>
          <p>{errorMessage}</p>
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

  function handleForm(e){
    
    e.preventDefault()
    let inputpages = pages.current.value
    let listPages = inputpages.split(',')
    let data = {
      manga_id: chapterId.id_manga,
      title: title.current.value,
      order: order.current.value,
      pages: listPages
    }

    // let token = localStorage.getItem('token')
    // let headers = {headers:{'Authorization':`Bearer ${token}`}}
    axios.post(apiUrl+"chapters", data)
    .then(res =>{
      console.log(res)
      setModalSuccessIsOpen(true)
    }) 
    .catch(err => {
      console.error(err.response.data.message)
      setErrorMessage(err.response.data.message)
      setModalErrorIsOpen(true)
    })
    
  }


  return (
    <>
      <section className="grid h-screen place-content-center text-slate-300  bg-[#EBEBEB]">
        <div className="mb-5 text-center text-black">
          <h1 className="text-3xl">New Chapter</h1>
        </div>
        <form onSubmit={(e)=>handleForm(e)} className="flex flex-col items-center justify-center space-y-6 pt-10">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Insert title"
            className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
            ref = {title}
          />
          <input
            type="text"
            id="Insert order"
            name="Insert order"
            placeholder="Insert order"
            className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
            ref = {order}
            />
         
          
          <input
            type="array"
            id="Insert pages"
            name="Insert pages"
            placeholder="Insert pages"
            className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-20 text-black"
            ref = {pages}
            />
          

          <button className="rounded-full bg-pink-500 p-2 px-16 py-2 text-white t-10 text-lg font-bold mt-5" type="submit" value={"send"}>
            Send
          </button>
        </form>
      </section>
      {modalSuccessIsOpen && (
        <ModalChapter onClose={closeModal}>
          {successModal()}
        </ModalChapter>
      )}
      {modalErrorIsOpen && (
        <ModalChapter onClose={closeErrorModal}>
          {errorModal()}
        </ModalChapter>
      )}
    </>
  )
  }
