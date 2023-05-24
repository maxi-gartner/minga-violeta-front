import axios from "axios";
import  { useRef, useState } from "react"
import apiUrl from "../../api"
import { useParams } from "react-router-dom"
import ModalMinga from "../components/ModalMinga"
import { uploadFile } from "../firebase/config"
import Grid from "react-loading-icons/dist/esm/components/grid";

export default function ChapterForm() {

  let [img, setImg] = useState(null)
  let [allPages, setAllPages] = useState([])
  let [buttonSend, setButtonSend] = useState(true)
  let [loading, setLoading] = useState(false)
  //console.log(img,);
  console.log(allPages);

  const handleSubmit = async (img) => {
    try {
      setLoading(true)
        const result = await uploadFile(img, "chapters/")
        console.log(result);
        setImg(result)
        if(result && allPages.length > 0) {
          setButtonSend(false)
        }
      setLoading(false)
    } catch (error) {
        console.log(error);
    }
}
  const handleSubmitPages = async (file) => {
    try {
      setLoading(true)
        let allResults = []
        for(let i=0; i< file.length; i++){
          //console.log(img[i]);
          const result = await uploadFile(file[i], "pages/")
          allResults.push(result)
        }
        if(allResults.length > 0){
          setAllPages(allResults)
        }
        console.log(img);
        if(img && allResults.length > 0) {
          setButtonSend(false)
        }
      setLoading(false)
    } catch (error) {
        console.log(error);
    }
}

  let chapterId = useParams()
  //console.log(chapterId)
  let title = useRef()
  let order = useRef()

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

  function handleForm(e){
    
    e.preventDefault()
    let data = {
      manga_id: chapterId.id_manga,
      title: title.current.value,
      order: order.current.value,
      pages: allPages,
      cover_photo: img
    }

    axios.post(apiUrl+"chapters", data, headers)
    .then(res =>{
      console.log(res)
      setModalSuccessIsOpen(true)
      e.target.reset()
    }) 
    .catch(err => {
      console.error(err.response.data.message)
      setErrorMessage(err.response.data.message.map(message => message))
      setModalErrorIsOpen(true)
    })
    
  }

  let token = localStorage.getItem('token')
  let headers = {headers:{'Authorization':`Bearer ${token}`}}

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
            className="w-full appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
            ref = {title}
          />
          <input
            type="text"
            id="Insert order"
            name="Insert order"
            placeholder="Insert order"
            className="w-full appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-black"
            ref = {order}
            />
            <div>
              <p className="text-gray-400 p-1 px-4">Insert Image</p>
              <input type="file" onChange={e => handleSubmit(e.target.files[0])} className=' inputFile border-2 border-gray-300 text-black'/>
            </div>
            <div>
              <p className="text-gray-400 p-1 px-4">Insert Pages</p>
              <input type="file" multiple onChange={e => handleSubmitPages(e.target.files)} className=' inputFile border-2 border-gray-300 text-black'/>
            </div>
          

            <button disabled={buttonSend} className="rounded-full bg-pink-500 p-2 px-16 py-2 text-white t-10 text-lg font-bold mt-5  disabled:opacity-50" type="submit" value={"send"}>
            Send
          </button>
          {!loading ? (<></>) : (<Grid className="absolute bg-[#00000073] p-2 rounded-lg"/>)}
        </form>
      </section>
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
    </>
  )
  }
