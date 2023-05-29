import { useState, useEffect } from 'react'
import axios from "axios"
import apiUrl from "../../api"
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

export default function ChatBot() {

  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('Send your message')
  const [messageBack, setMessageBack] = useState(['Response...'])
  const [mangas, setMangas] = useState([])
  const list = mangas.map(data => data.title)
  console.log(list);

  console.log("messageBack", messageBack);

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('message', message)
  }
  
  let token = () => localStorage.getItem('token')
  let headers = {headers:{'Authorization' : `Bearer ${token()}`}}
  useEffect(
    ()=>{
        axios(apiUrl+`mangas/`, headers)
            .then(res=>{
                setMangas(res.data.response)
            })
            .catch(err => console.log(err))
    },
    []
)

  useEffect(()=>{
    socket.on('message', message => {
      console.log(message);
      if(message === 'manga list'){
        console.log("son iguales");
        setMessageBack(list)
      }else{
        setMessageBack(message)
      }
    })
  },[message])

  return (
    <>
    {!open ? 
    (
      <button className="fixed z-50 bottom-5 right-5 w-48 h-64 pt-4 flex justify-end items-end shadow-[0px_0px_15px_rgba(0,0,0,0.16)  cursor-pointer hover:shadow-[0px_0px_30px_rgba(0,140,255,0.28)] transition duration-200] hover:bg-[rgba(0,140,255,0.15)]"  onClick={ ()=> setOpen(true)}>
          <img className='h-48 absolute left-0' src="./IMG-BotChat.png" alt="" />
          <img className='w-24 mt-3 absolute top-0' src="./IMG-Chat.png" alt="" />
      </button>
    ):
    (
      <div className="fixed z-50 bottom-5 right-5 h-96 w-72 rounded-lg shadow-xl shadow-black bg-slate-200 ">
        <div className='w-full h-[20%] bg-slate-300 rounded-t-lg flex justify-around items-center border-b-2 border-slate-700'>
          <img className='h-24' src="./innerchat.png" alt="" />
          <div>
            <h1 className='f font-semibold text-2xl border-b-2 border-green-700 text-center'>Minga Bot</h1>
            <p className='f font-light text-green-700'>How can I help you?</p>
          </div>
          <div className='h-full mt-3'>
            <button className='w-6 h-6 text-red-700 hover:text-black hover:bg-red-700 rounded-full border-2 border-red-700 hover:border-black transition duration-200' onClick={ ()=> setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" >
              <path  d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          </div>
        </div>
        <div className='h-[65%] w-full p-2 overflow-auto'>
            <div>
                <ul className='h-1/4'>
                  <li>Mangas available?</li>
                  <li>How to be an author?</li>
                  <li>Register your company?</li>
                </ul>
                <div className='flex flex-col justify-around h-3/4'>
                  <div className='w-2/3 border-[2px] p-1 rounded-xl bg-slate-300 border-green-700 m-2'>
                    <p className='text-xs'>You:</p>
                    <p className='p-1'>{message}</p>
                  </div>
                  <div className='w-full flex justify-end'>
                    <div className='w-2/3 border-[2px] p-1 rounded-xl bg-slate-300 border-red-700 m-2'>
                      <p className='text-xs'>Minga Bot:</p>
                      {messageBack.map((message) => 
                        <div key={message}>
                        <p className='p-1'>{message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} className='h-[15%] w-full flex flex-col relative pb-1'>
          <textarea className='p-3 pr-8 border-2 border-gray-300 mx-1' 
                    rows="20"
                    type="textarea" 
                    placeholder='Whrite your message'
                    onChange={e => setMessage(e.target.value)}
                    value={message}
          ></textarea>
          <div className='absolute right-3 h-full flex items-center'>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="black" className="w-6 h-7 hover:w-7">
                <path  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    )}
    </>
  );
}
