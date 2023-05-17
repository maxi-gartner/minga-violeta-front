import axios from "axios"
import { useEffect, useState } from "react";
import apiUrl from "../../api"
import { useSelector, useDispatch } from "react-redux";
import myManga_actions from '../store/actions/myMangas'
const { read_mangas, delete_mangas } = myManga_actions

export default function MyMangas() {
  let mangas = useSelector(store => store.myMangas.mangas)
  let dispatch = useDispatch()
    //const [mangas, setManga] = useState()
    const [categorias, setCategorias] = useState([])
    useEffect(
      () => {
        if(mangas.length === 0) {
          dispatch(read_mangas())
        }
    }, []
    )
    console.log("mangas", mangas);
    useEffect(
      () => {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}`} }
          axios(apiUrl + 'categories', headers).then(res => setCategorias(res.data.categories)).catch(err => console.log(err))
      },
      []
  )
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalConfirmDelete, setOpenModalConfirmDelete] = useState(false)
  const [IdClick, setIdClick] = useState('')
  const clickDelete = (id) => {
    setOpenModalDelete(true)
    setIdClick(id)
  }
  console.log(IdClick);
  const confirmDelete = () => {
    dispatch(delete_mangas(IdClick))
    setOpenModalDelete(false)
    setOpenModalConfirmDelete(true)
  }

  return (
    <div className="min-h-screen">
    <ModalDelete open={openModalDelete} 
    onClose={()=> setOpenModalDelete(false)}
    confirm={()=> confirmDelete()}  
    />
    <ModalConfirmDelete open={openModalConfirmDelete} 
    onClose={()=> setOpenModalConfirmDelete(false)}
    />
      <img className="h-[40vh] w-screen object-cover" src="./mymangasimg.png" alt="" />
      <form  className="mt-10 ml-10 w-[80%] flex flex-wrap">
        <label  className="bg-[#999999] text-white p-2 m-2 rounded-2xl w-24 flex justify-center shadow-[0px_0px_15px_rgba(0,0,0,0.16)] font-semibold">All
          <input name="category_id" 
                  style={{ appearance: 'none' }} 
                  type="checkbox" value="" id="" />
        </label>
        {categorias && categorias.map((category) =>
            <label htmlFor={category._id} key={category._id} 
                    className=" border-white p-2 m-2 rounded-2xl w-24 flex justify-center font-semibold shadow-[0px_0px_15px_rgba(0,0,0,0.16)] cursor-pointer" 
                    style={{backgroundColor: category.hover, color: category.color}}>
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                <input name="category_id"
                      style={{ appearance: 'none' }} 
                      type="checkbox" value={category._id} id={category._id} />
            </label>)}
      </form>
      <div className="pt-10 flex flex-wrap justify-center sm:justify-around">
        {mangas?.map(element => {
            return <div className=" flex w-80 sm:min-w-96 sm:w-96 sm:mx-2 h-48 my-10 rounded-xl items-center overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.56)]" key={element.title}>
                      <div className="w-2 h-36" style={{background: element.category_id.color}}></div>
                      <div className="w-1/2 flex flex-col items-center p-3 justify-between h-full">
                        <div className="w-full flex">
                          <button className="mr-3">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 border-solid border-2 border-black rounded-full">
                            <path d="M12 4.5v15m7.5-7.5h-15"></path></svg>  
                          </button>
                          <button>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-5 h-5 border-solid border-2 border-black rounded-full p-[2px]">
                            <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path></svg>
                          </button>
                        </div>
                        <div className=" w-full">
                          <p className="text-[22px] font-bold">{element.title}</p>
                          <p style={{color: element.category_id.color}}>{element.category_id.name.charAt(0).toUpperCase() + element.category_id.name.slice(1)}</p>
                        </div>
                        <div className="flex">
                          <button className="w-20 h-7 rounded-full mr-2" style={{background: element.category_id.hover, color: element.category_id.color}}>Edit</button>
                          <button onClick={()=> clickDelete(element._id)} className="w-20 h-7 rounded-full bg-red-600 text-white">Delete</button>
                        </div>
                      </div>
                      <div className="w-1/2">
                        {<img className="h-48 w-full object-cover shadow-[0px_0px_15px_rgba(0,0,0,0.56)]" style={{"borderRadius": "30% / 50% 0% 0% 50%"}} src={element.cover_photo} alt="" />}
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
    <div className="fixed w-full h-full flex items-center justify-center bg-[#00000095]">
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
const ModalConfirmDelete = ({open, onClose, confirm}) =>{
  if(!open) return null
  return(
    <div className="fixed w-full h-full flex items-center justify-center bg-[#00000095]">
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