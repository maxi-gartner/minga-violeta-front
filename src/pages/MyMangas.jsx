import axios from "axios"
import { useEffect, useState, useRef } from "react";
import apiUrl from "../../api"
import { useSelector, useDispatch } from "react-redux";
import myManga_actions from '../store/actions/myMangas'
const { read_mangas, delete_mangas, update_mangas } = myManga_actions
import { Link as Anchor} from "react-router-dom";
import inputs_cheked from '../store/actions/inputsCheked'

export default function MyMangas() {
  let mangas = useSelector(store => store.myMangas.mangas)
  //console.log("mangas", mangas);
  let dispatch = useDispatch()
    const [categories, setCategories] = useState([])
    useEffect(
      () => {
        if(mangas.length === 0) {
          dispatch(read_mangas())
        }
    }, []
    )
    //console.log("mangas", mangas);
    useEffect(
      () => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
          axios(apiUrl + 'categories', headers).then(res => setCategories(res.data.categories)).catch(err => console.log(err))
      },
      []
  )
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalConfirm, setOpenModalConfirm] = useState(false)
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [IdClick, setIdClick] = useState('')
  const [mangaEdit, setMangaEdit] = useState([])
  const {categoriesCheked} = useSelector( store => store.inputsCheked)
  const {inputsCheked} = inputs_cheked

  //funcion activada al hacer click en delete
  const clickDelete = (id) => {
    setOpenModalDelete(true)
    setIdClick(id)
  }

  //funcion activada al hacer click en edit
  const clickEdit = (id) => {
    setOpenModalEdit(true)
    setIdClick(id)
    setMangaEdit(mangas.find(manga => manga._id === id))
  }

  //funcion de confirmacion
  const confirmDelete = () => {
    dispatch(delete_mangas(IdClick))
    setOpenModalDelete(false)
    setOpenModalConfirm(true)
  }
  
  const [mangasfilter, setMangasfilter] = useState([])
  const category_id = useRef('')
  function capture(){
    dispatch(inputsCheked({
      categoriesCheked: Object.values(category_id.current).filter(each => each.checked).map(each => each.value)
    }))// objetct me devuelve un array que me llega del useref y lo filtro al chekeado y lo mapeo poara q me devuelva el valor
    const edit_mangas = () => {
      let categoriesCheked = Object.values(category_id.current).filter(each => each.checked).map(each => each.value)
              let mangasFilters = []
              categoriesCheked.forEach(category => {
                mangas.filter(each => {
                    if(each.category_id._id.indexOf(category) !== -1){
                        mangasFilters.push(each)
                    }
                })
            })
            setMangasfilter(mangasFilters)
          }
          edit_mangas()
}

let mangasRender = []
mangas.length > mangasfilter.length && mangasfilter.length !== 0 ? mangasRender = mangasfilter : mangasRender = [...mangas]

const imputAll = () => {
  dispatch(inputsCheked({
    categoriesCheked: []
  }))
  setMangasfilter([])
}

  return (
    <div className="min-h-screen">
      <ModalDelete open={openModalDelete} 
                  onClose={()=> setOpenModalDelete(false)}
                  confirm={()=> confirmDelete()}  
                  />
      <ModalConfirm open={openModalConfirm} 
                          onClose={()=> setOpenModalConfirm(false)}
                          />
      <ModalEdit  open={openModalEdit} 
                  mangaSelected={mangaEdit}
                  onClose={()=> setOpenModalEdit(false)}
                  confirm={()=> setOpenModalConfirm(true)}  
                  />
      <img className="h-[40vh] w-screen object-cover" src="./mymangasimg.png" alt="" />
      <form ref={category_id} className="mt-10 w-full flex flex-wrap justify-center sm:justify-start">
        <label  className="bg-[#999999] text-white ml-0 sm:ml-5 p-2 m-2 rounded-2xl w-24 flex justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.16)  cursor-pointer hover:font-bold hover:shadow-[0px_0px_15px_rgba(0,0,0,0.36)] transition duration-200] font-semibold">All
          <input name="category_id"  
                  onClick={()=> imputAll()}
                  style={{ appearance: 'none' }} 
                  type="checkbox" value="" id="" />
        </label>
        {categories.map((category) =>
                              <label htmlFor={category._id} 
                                      key={category._id} 
                                      className=" border-white p-2 m-2 rounded-2xl w-24 flex justify-center font-semibold shadow-[0px_0px_15px_rgba(0,0,0,0.16)] cursor-pointer hover:font-bold hover:shadow-[0px_0px_15px_rgba(0,0,0,0.36)] transition duration-200" 
                                      style={{ backgroundColor: category.hover, color: category.color, ...(categoriesCheked.includes(category._id)? {backgroundColor: category.color, color: "white", boxShadow: `0 0 0 8px ${category.hover}`} : {}) }}>
                              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                              <input name="category_id" 
                                      onClick={capture} 
                                      defaultChecked={categoriesCheked.includes(category._id)}
                                      style={{ appearance: 'none' }} 
                                      type="checkbox" 
                                      value={category._id} 
                                      id={category._id} />
                                </label>)}
                        </form>
      <div className="pt-10 flex flex-wrap justify-center sm:justify-around">
        <div className=" flex w-[23rem] sm:min-w-96 sm:w-96 sm:mx-2 h-48 sm:my-10 rounded-xl items-center overflow-hidden relative shadow-[0px_0px_10px_rgba(0,0,0,0.56)]">
          <img className="w-full h-full object-cover" src="/dibujandominga.jpg" alt="" />
            <Anchor to="/manga-form" className="mr-3 absolute w-full h-full flex flex-col items-center justify-center hover:bg-[#00000073]">
              <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-14 h-14 border-solid border-2 border-black rounded-full bg-[#00000073]">
              <path d="M12 4.5v15m7.5-7.5h-15"></path></svg>  
            </Anchor>
            <p className="sm:text-5xl text-4xl text-white absolute w-full text-center bottom-0 py-1 bg-[#00000073]">Create Manga</p>
      </div>
        {mangasRender?.map(element => {
            return <div className=" flex w-[23rem] sm:min-w-96 sm:w-96 sm:mx-2 h-48 my-5 sm:my-10 rounded-xl items-center overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.56)]" key={element.title}>
                      {/* <div className="w-2 h-36" style={{background: element.category_id.color}}></div> */}
                      <div className="w-1/2 flex flex-col items-center p-3 justify-between h-full">
                        <div className="w-full flex">
                          <Anchor to={`/chapter-form/${element._id}`} className="mr-3">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 border-solid border-2 border-black rounded-full transform hover:scale-125 transition duration-200">
                            <path d="M12 4.5v15m7.5-7.5h-15"></path></svg>  
                          </Anchor>
                          <Anchor to={`/edit/${element._id}`}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 border-solid border-2 border-black rounded-full p-[2px] hover:scale-125 transition duration-200">
                            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg>
                          </Anchor>
                        </div>
                        <div className=" w-full">
                        <Anchor to={`/detailsManga/${element._id}`}><p className="text-[22px] font-bold">{element.title}</p></Anchor>
                          <p style={{color: element.category_id.color}}>{element.category_id.name.charAt(0).toUpperCase() + element.category_id.name.slice(1)}</p>
                        </div>
                        <div className="flex">
                          <button onClick={()=> clickEdit(element._id)} className="w-20 h-7 rounded-full mr-2 shadow-[0px_0px_10px_rgba(0,0,0,0.26)]  hover:font-semibold" style={{background: element.category_id.hover, color: element.category_id.color}}>Edit</button>
                          <button onClick={()=> clickDelete(element._id)} className="w-20 h-7 rounded-full bg-red-600 text-white shadow-[0px_0px_10px_rgba(0,0,0,0.36)] hover:font-semibold">Delete</button>
                        </div>
                      </div>
                      <div className="w-1/2">
                      <Anchor to={`/detailsManga/${element._id}`}>{<img className="h-48 w-full object-cover shadow-[0px_0px_15px_rgba(0,0,0,0.56)] transform hover:scale-110 transition duration-500" style={{"borderRadius": "30% / 50% 0% 0% 50%"}} src={element.cover_photo} alt="" />}</Anchor>
                      </div>
                  </div>
              })}
        </div>
    </div>
  );
}

const ModalDelete = ({open, onClose, confirm}) =>{
  if(!open) return null
  return(
    <div className="fixed w-full h-full flex items-center justify-center bg-[#00000095] z-40">
      <div className="w-80 bg-[#F2F2F7] rounded-xl">
        <div className="w-full h-20 flex justify-center items-center font-semibold">
          <p>Are you sure you want to delete?</p>
        </div>
        <div className="w-full flex">
          <button onClick={confirm} className="w-1/2 flex justify-center items-center h-14 border-t-[1px] border-r-[1px] border-gray-300 text-[#EE8380] hover:font-semibold">Yes, im sure</button>
          <button onClick={onClose} className="w-1/2 flex justify-center items-center h-14 border-t-[1px] border-gray-300 text-[#0A7AFF] hover:font-semibold">No</button>
        </div>
      </div>
    </div>
  )
}
const ModalConfirm = ({open, onClose}) =>{
  if(!open) return null
  return(
    <div className="fixed w-full h-full flex items-center justify-center bg-[#00000095] z-40">
      <div className="w-80 bg-[#F2F2F7] rounded-xl">
        <div className="w-full h-20 flex justify-center items-center font-semibold">
          <p>Your changes are saved correctly!</p>
        </div>
        <div className="w-full flex">
          <button onClick={onClose} className="w-full flex justify-center items-center h-14 border-t-[1px] border-gray-300 text-[#0A7AFF] hover:font-semibold">Acept</button>
        </div>
      </div>
    </div>
  )
}
const ModalEdit = ({open, onClose, mangaSelected, confirm}) =>{
  const coverPhoto = useRef()
  const description = useRef()
  const title = useRef()
  let dispatch = useDispatch()
  if(!open) return null
  //update_mangas

  function handleForm(e){
    e.preventDefault()
    let data = {}
      if(title.current.value.length > 0){
        data.title = title.current.value
      }
      if(coverPhoto.current.value.length > 0){
        data.cover_photo = coverPhoto.current.value
      }
      if(description.current.value.length > 0){
        data.description = description.current.value
      }
      //console.log("data", data);
      //console.log("mangaSelected._id", mangaSelected._id);
      dispatch(update_mangas({
        id: mangaSelected._id, 
        data: data
      }
        ))
        confirm()
        onClose()
    }

  return(
    <div className="fixed w-full h-full flex items-center justify-center bg-[#00000095] z-40">
      <div className="w-full h-full max-w-96 sm:w-96 sm:h-[80vh] bg-[#F2F2F7] rounded-xl flex flex-col justify-center items-center">
        <div>
          <h1 className="text-center text-4xl pb-[2vh]">Edit Manga</h1>
        </div>
        <form onSubmit={handleForm}  className="text-black flex flex-col justify-between w-[70%]">
          <div className="grid h-full py-5">
            <div className="flex flex-col mb-4">
                <input type="text" 
                        placeholder={mangaSelected.title}  
                        ref={title}  
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg"
                />
            </div>
            <div className="flex flex-col mb-4">
                <input type="text"
                        placeholder="Cover Photo"
                        ref={coverPhoto}
                        autoComplete="off"
                        className="bg-transparent border-b-[1px] border-gray-600 pl-4 text-gray-500 text-lg" 
                />
            </div>
            <div className="flex flex-col">
                <textarea name="textarea" 
                          rows="10" 
                          ref={description}  
                          placeholder={mangaSelected.description}
                          className="bg-transparent border-[1px] border-gray-700">
                </textarea>
            </div>
          </div>
          <button type="submit" className="text-white bg-[#34D399] text-2xl font-medium hover:font-bold text-center py-3 rounded-full mb-5">Edit</button>
          <button onClick={onClose} className="bg-[#FBDDDC] text-[#EE8380] text-2xl font-medium hover:font-bold text-center py-3 rounded-full ">Cancel</button>
        </form>
      </div> 
    </div>
  )
}