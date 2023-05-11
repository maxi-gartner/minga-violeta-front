import VITE_API from '../../api'
import  { useRef, useState } from "react"
import axios from 'axios';
import { Link as Anchor ,useNavigate } from "react-router-dom";
import ModalMinga from "../components/ModalMinga"

export default function SignIn(){
  let email = useRef();
  let password = useRef();
  const navigate = useNavigate()
  
  function handleForm(e) {
    e.preventDefault()
    let data = {
      email: email.current.value,
      password: password.current.value
    }
    axios.post(VITE_API + "auth/signin", data)
      .then(res => {
        console.log(res.data)
        const token = res.data.token;
        const role = res.data.user.role;
        const email = res.data.user.email;
        const photo = res.data.user.photo;
        console.log(token)
    
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('email', email);
        localStorage.setItem('photo', photo);
        setModalSuccessIsOpen(true)
        setTimeout(function(){
          navigate('/');
      }, 1000);
      })
      .catch(err => { 
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
          <p>User loged successfully!</p>
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
      <>
        <div className="h-screen w-full flex justify-center items-center bg-white">
          <img
            src="/public/fondosignin.png"
            className="hidden sm:w-1/2 h-full sm:flex object-cover object-top "
          />
          <div className="flex justify-center sm:w-1/2 bg-white sm:pt-28">
            <div className="bg-white min-h-screen w-[80vw] sm:w-10/12 flex justify-center items-center">
              <div className="flex flex-col w-full">
                <form onSubmit={(e) => handleForm(e)}>
                  <div className="flex flex-col items-center">
                  <h1 className="text-xl text-center font-semibold text-gray-800 tracking-wider">Welcome<span className='text-[#F472B6]'> back</span>!</h1>
                    
                    <p className=" text-sm text-center text-gray-550 mt-4">
                      Discover manga, manhua and manhwa, track your <br></br>{" "}
                      progress, have fun, read manga.
                    </p>
                  </div>

                  <div className="mt-5">
                    <fieldset className="border-2 rounded-md flex items-center">
                      <legend className="text-sm ml-2 text-fuchsia-400">
                        Email
                      </legend>
                      <input
                        ref={email}
                        className="px-4 w-full  py-2 rounded-md text-sm outline-none"
                        type="email"
                        name="Email"
                        placeholder="DragonballZ@Krowl.com"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon w-6 h-6 icon-tabler icon-tabler-at"
                        viewBox="0 0 24 24"
                        stroke="#2c3e50"
                        fill="none"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                      </svg>
                    </fieldset>
                  </div>

                  <div className="mt-5">
                    <fieldset className="border-2 rounded-md flex items-center">
                      <legend className="text-sm ml-2 text-fuchsia-400">
                        Password
                      </legend>
                      <input
                        ref={password}
                        className="px-4 w-full  py-2 rounded-md text-sm outline-none"
                        type="password"
                        name="Password"
                        placeholder="***************"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon w-6 h-6 icon-tabler icon-tabler-lock"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke="#2c3e50"
                        fill="none"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                      </svg>
                    </fieldset>
                  </div>
                  <div className="flex justify-between mt-2"></div>
                  <input className="mt-4 mb-3 w-full bg-gradient-to-b from-[#F9A8D4] to-[#F472B6] text-white py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold  text-xl h-12 cursor-pointer" type='submit' value="Sign in" />
                </form>
                <div className="flex space-x-2 justify-center items-end border-2 border-gray-250 text-gray-550 py-2 rounded-xl transition duration-100">
                  <img
                    className=" h-5 "
                    src="https://i.imgur.com/arC60SB.png"
                    alt="asd"
                  />
                  <a href="https://www.google.com.ar/">
                  <button>Sign in with google</button>
                  </a>
                </div>
                <div className="flex flex-col items-center text-sm">
                  <Anchor to="/auth/signup/login" className="mt-6  ">
                    {" "}
                    you dont have an account yet?{" "}
                    <span className="cursor-pointer text-fuchsia-500 font-bold">
                      Sign up
                    </span>
                  </Anchor>
                  <Anchor to="/" className="mt-2">
                    {" "}
                    Go back to{" "}
                    <span className="cursor-pointer text-fuchsia-500 font-bold">
                      Home page
                    </span>
                  </Anchor>
                </div>
              </div>
            </div>
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
      </>
    )
  }