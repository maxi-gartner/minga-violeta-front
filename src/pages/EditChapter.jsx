import { useParams } from "react-router-dom"
import  { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import chapters_actions from '../store/actions/chapters'
const { read_chapters, read_mangas  } = chapters_actions

export default function EditChapter() {
  
    let { id_manga } = useParams()
    console.log(id_manga)
    let title_chapter = useRef()
    let data_chapter = useRef()
    let data_edit = useRef()
    let chapters = useSelector(store => store.chapters.chapters)
    let mangasTitle = useSelector(store => store.chapters.mangas)
    console.log(mangasTitle)
    const [coverPhoto, setcoverPhoto] = useState("")
    const [order, setOrder] = useState("")
    const [title, setTitle] = useState("")

    console.log(chapters)
    
    let dispatch = useDispatch()

    useEffect(
      ()=>{
        dispatch(read_chapters({id_manga}))
        dispatch(read_mangas({id_manga}))
      }, []
    )

    function handleForm(e) {
      e.preventDefault()
      let data = {
          id_chapter: title_chapter.current.value,
          data_chapter: data_chapter.current.value,
          data_edit: data_edit.current.value
      }
      let cover = chapters.filter(image => image._id === data.id_chapter)
      setcoverPhoto(cover[0].cover_photo)
      let orderChapter = chapters.filter(order => order._id === data.id_chapter)
      setOrder(orderChapter[0].order)
      let titleChapter = chapters.filter(title => title._id === data.id_chapter)
      setTitle(titleChapter[0].title)
      console.log(data)
    }
    
    

  return (
    <>
      <div className="flex justify-around">
        <section className="grid h-[80vh] mb-[11rem] place-content-center text-slate-300 pt-52">
          <div className="mb-10 text-center text-black">
            <h1 className="text-3xl -tracking-tight font-montserrat">Edit Chapter</h1>
          </div>
          <form
            onChange={(e) => handleForm(e)}
            className="flex flex-col items-center justify-center space-y-6 pt-14"
          >
            <input
              type="text"
              id="Manga Title"
              name="Manga Title"
              placeholder="Name of the manga"
              className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"
              value={mangasTitle ?? ""}
              disabled={true}
            />
            <div>
              <select
                placeholder="Insert order"
                className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0  text-slate-400"
                name="chapters" ref={title_chapter}
              > <option value="" key="rr">
              Select chapter
            </option>
                  {chapters.map((chapter, index) => (
                    <option key={index} value={chapter._id}>{chapter.title}</option>
                  ))}
              </select>
            </div>
            <div>
              <select
                placeholder="Insert order"
                className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 text-slate-400"
                name="chapters" ref={data_chapter}
              >
                
                <option value="" key="rr">
                  Select data
                </option>
                <option key="title" value="title">Title chapter</option>
                <option key="cover-photo" value="cover-photo">Cover photo</option>
                <option key="order" value="order">Order</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                id="Insert order"
                name="Insert order"
                placeholder="Data to edit"
                className="w-80 appearance-none  border-0  p-2 px-4 text-black border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-16"
                ref={data_edit}
              />
            </div>
            <button className="rounded-full bg-[#34D399] p-2 px-32 py-4 text-white t-10 font-bold text-lg">
              {" "}
              Send
            </button>
            <button
              className="rounded-full bg-[#FBDDDC] p-2 px-32 py-4 text-[#EE8380] t-10 font-bold text-lg"
            >
              {" "}
              Delete
            </button>
          </form>
        </section>
        <div className="grid place-content-center pt-36 h-full xsm:hidden">
          <p className="text-center mb-5 font-bold">
            Chapter {order} - {title}
          </p>
          <img
            className="h-[35rem] w-auto"
            src={coverPhoto}
          />
        </div>
      </div>
    </>
  );
}
