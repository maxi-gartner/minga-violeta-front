import { useParams } from "react-router-dom"
import  { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import chapters_actions from '../store/actions/chapters'
import ConfirmModal from "../components/ConfirmModal"
import ModalMinga from "../components/ModalMinga"
import myManga_actions from '../store/actions/myMangas'
const { read_mangas } = myManga_actions
const { read_chapters, delete_chapters, update_chapters } = chapters_actions

export default function EditChapter() {
  
    let { id_manga } = useParams()
    let title_chapter = useRef()
    let data_chapter = useRef()
    let data_edit = useRef()
    let chapters = useSelector(store => store.chapters.chapters)
    let mangas = useSelector(store => store.myMangas.mangas)
    let mangasTitleObjetc = mangas.find(manga => manga._id === id_manga)
    let mangasTitle = mangasTitleObjetc.title
    //console.log(mangasTitle);
    
    const [coverPhoto, setcoverPhoto] = useState("")
    const [order, setOrder] = useState("")
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState([])
    const [modalOpenDelete, setModalOpenDelete] = useState(false);
    const [modalOpenEdit, setModalOpenEdit] = useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
    const [modalConfirmEdit, setModalConfirmEdit] = useState(false);
    let dispatch = useDispatch()
    const [idToDestroy, setIdToDestroy] = useState("");
    const [idToUpdate, setIdToUpdate] = useState("");
    const [currentKey, setCurrentKey] = useState("");
    const [currentValue, setCurrentValue] = useState("");

    const destroy = () => {
      dispatch(delete_chapters({
        id: idToDestroy
      }));
      handleModalCloseDelete();
      setcoverPhoto("");
      setTitle("");
      setOrder("");
      handleModalOpenConfirmDelete(true);
    }

    const upd_chapters = () => {
      let dataToUpdate = {};

      dataToUpdate = {
        _id: idToUpdate,
        title: currentKey == "title" ? currentValue : title,
        order: currentKey == "order" ? currentValue : order,
        cover_photo: currentKey == "cover_photo" ? currentValue : coverPhoto,
        pages: currentKey == "pages" ? currentValue.split(',') : pages
      }
      

      dispatch(update_chapters({
        id: idToUpdate, 
        data: dataToUpdate
      }))

      handleModalCloseEdit();

      setOrder(dataToUpdate.order)
      setcoverPhoto(dataToUpdate.cover_photo)
      setTitle(dataToUpdate.title)
      handleModalOpenConfirmEdit(true)
    }

    //console.log(chapters)
    

    useEffect(
      ()=>{
        dispatch(read_chapters({id_manga}))
        dispatch(read_mangas({id_manga}))
      }, []
    )

    
    const handleModalOpenDelete = () => {
      setModalOpenDelete(true);
    }
    const handleModalCloseDelete = () => {
      setModalOpenDelete(false);
    }

    const handleModalOpenEdit = () => {
      setModalOpenEdit(true);
    }
    const handleModalCloseEdit = () => {
      setModalOpenEdit(false);
    }

    const handleModalOpenConfirmDelete = () => {
      setModalConfirmDelete(true);
    }
    const handleModalCloseConfirmDelete = () => {
      setModalConfirmDelete(false);
    }

    const handleModalOpenConfirmEdit = () => {
      setModalConfirmEdit(true);
    }
    const handleModalCloseConfirmEdit = () => {
      setModalConfirmEdit(false);
    }


    function handleForm(e) {
      e.preventDefault()
      let data = {
          id_chapter: title_chapter.current.value,
          data_chapter: data_chapter.current.value,
          data_edit: data_edit.current.value
      }
      setIdToDestroy(data.id_chapter)
      setIdToUpdate(data.id_chapter)
      let selectedChapter = chapters.filter(image => image._id === data.id_chapter)
      setcoverPhoto(selectedChapter[0].cover_photo)
      setOrder(selectedChapter[0].order)
      setTitle(selectedChapter[0].title)
      setPages(selectedChapter[0].pages)
      setCurrentKey(data.data_chapter)
      setCurrentValue(data.data_edit)
      //console.log(data.data_chapter) 
    }

  return (
    <>
      <div className="flex justify-around">
        <section className="relative grid h-screen mb-[1rem] place-content-center text-slate-300 msm:mt-10 mlg:mt-4">
          <div className="mb-1 text-center text-black">
            <h1 className="text-2xl -tracking-tight font-montserrat">Edit Chapter</h1>
          </div>
          <form
            onChange={(e) => handleForm(e)}
            className="flex flex-col items-center justify-center space-y-3 pt-10"
          >
            <input
              type="text"
              id="Manga Title"
              name="Manga Title"
              placeholder="Name of the manga"
              className="w-60 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
              value={mangasTitle ?? ""}
              disabled={true}
            />
            <div className="relative">
              <select
                placeholder="Select title"
                className="w-60 appearance-none border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0  text-slate-400 block"
                name="chapters" ref={title_chapter}
              > <option className="text-sm" value="" disabled selected>
              Select chapter
            </option>
                  {chapters.map((chapter, index) => (
                    <option className="text-sm" key={index} value={chapter._id}>{chapter.title}</option>
                  ))}
              </select>
              <svg className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="relative">
              <select
                placeholder="Select prop"
                className="w-60 appearance-none border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-slate-400 block"
                name="chapters" ref={data_chapter}
              >   
                <option className="text-sm" value="" disabled selected>
                  Select data
                </option>
                <option className="text-sm" key="title" value="title">Title chapter</option>
                <option className="text-sm" key="cover_photo" value="cover_photo">Cover photo</option>
                <option className="text-sm" key="order" value="order">Order</option>
                <option className="text-sm" key="pages" value="pages">Pages</option>
              </select>
                <svg className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 1 1 1.414-1.414L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z" clipRule="evenodd" />
                </svg>
            </div>
            <div>
              <input
                type="text"
                id="Insert order"
                name="Insert order"
                placeholder="Data to edit"
                className="w-60 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-6"
                ref={data_edit}
              />
            </div>
            
          </form>
          <button className="rounded-full bg-[#34D399] p-2 py-3 text-white t-10 font-bold text-md" onClick={handleModalOpenEdit}>
                Edit
            </button>
            <button
              className="rounded-full items-center bg-[#FBDDDC] mt-4 p-2 py-3 text-[#EE8380] t-10 font-bold text-md" onClick={handleModalOpenDelete}
            >
              Delete
            </button>
        </section>
        <div className="grid place-content-center msm:hidden mmd:hidden">
          {(order!=="" && title!=="") && <p className="text-center mb-5">
            Chapter {order} - {title}
          </p>}
          <img
            className="h-[65vh] w-auto"
            src={coverPhoto}
          />
        </div>
      </div>
      {modalOpenDelete && (
        <ConfirmModal onClose={handleModalCloseDelete} handleClick={destroy}>
          <div className="p-4">
          Are you sure you want to delete?
          </div>
        </ConfirmModal>
      )}
      {modalOpenEdit && (
        <ConfirmModal onClose={handleModalCloseEdit} handleClick={upd_chapters}>
          <div className="p-4">
          Are you sure you want to edit?
          </div>
        </ConfirmModal>
      )}  
      {modalConfirmDelete && (
        <ModalMinga onClose={handleModalCloseConfirmDelete}>
          <div className="p-4">
          Chapter was deleted correctly!
          </div>
        </ModalMinga>
      )}
      {modalConfirmEdit && (
        <ModalMinga onClose={handleModalCloseConfirmEdit}>
          <div className="p-4">
          Your changes are saved correctly!
          </div>
        </ModalMinga>
      )}  
    </>
  )
}
