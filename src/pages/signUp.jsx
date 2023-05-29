import  { useRef, useState, useEffect } from "react"
import VITE_API from '../../api'
import axios from "axios";
import { Link as Anchor ,useNavigate } from "react-router-dom";
import ModalMinga from "../components/ModalMinga"
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import { uploadFile } from "../firebase/config"
import Grid from "react-loading-icons/dist/esm/components/grid";

export default function SignUp(){
    let email = useRef();
    let password = useRef();
    const navigate = useNavigate()
    const clientID = "737446826653-er6fd8scpp0j10fn9iqhops40i07g09n.apps.googleusercontent.com"
    let [loading, setLoading] = useState(false)

    function handleForm(e) {
      e.preventDefault();
      let data = {
        email: email.current.value,
        photo: img,
        password: password.current.value,
      };
      axios.post(VITE_API + "auth/signup", data)
        .then(() => {
          setModalSuccessIsOpen(true)
          setTimeout(function(){
            navigate('/auth/signin/auth');
        }, 1000);
        e.target.reset()
        })
        .catch(err => { 
          setErrorMessage(err.response.data.message.map(message => message))
          setModalErrorIsOpen(true)
        })
    }
    
    let [img, setImg] = useState(null)
    let [buttonSend, setButtonSend] = useState(true)

    const handleSubmit = async (img) => {
        try {
          setLoading(true)
            const result = await uploadFile(img, "users/")
            console.log(result);
            setImg(result)
            if(result){
              setButtonSend(false)
            }
          setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false);
  const [onModalSuccessIsOpen, setOnModalSuccessIsOpen] = useState(false);
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const onSuccess = (response) => {
    const { email, imageUrl, googleId } = response.profileObj;
    let data = {
      email: email,
      photo: imageUrl,
      password: googleId
    }
    axios.post(VITE_API + "auth/signup", data)
      .then(res => {
        setOnModalSuccessIsOpen(true)
      })
      .catch(err => {
        console.log(err)
        setErrorMessage(err.response.data.message)
        setModalErrorIsOpen(true)
      })
  }
  const onFailure = () => {
    setErrorMessage("Error, could not be verified.")
    setModalErrorIsOpen(true)
  }

  const successModal = () => {
    return (
      <div>
        <div className="p-4">
          <h2 className="font-semibold">Success</h2>
          <p>User created successfully!</p>
        </div>
      </div>
    );
  };
  const onSuccessModal = () => {
    return (
      <div>
        <div className="p-4">
          <h2 className="font-semibold">Success</h2>
          <p>Verify your Gmail</p>
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
    setOnModalSuccessIsOpen(false)
  }

  const closeErrorModal = () => {
    setModalErrorIsOpen(false);
  }

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center bg-white relative">
    {!loading ? (<></>) : (<Grid className="absolute bg-[#00000073] p-2 rounded-lg"/>)}
        <div className="flex justify-center w-1/2 bg-white">
          <div className="bg-white min-h-screen flex justify-center items-center pt-24 sm:pt-12 sm:w-[80%]">
            <div className="flex flex-col w-[90vw] sm:pt-28">
              <form onSubmit={(e) => handleForm(e)}>
                <div className="flex flex-col items-center">
                  <h1 className="text-lg text-center font-semibold text-gray-800">Welcome<span className='text-[#F472B6]'> back</span>!</h1>
                  <p className="text-m text-center text-gray-550 mt-4">
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
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                    </svg>
                  </fieldset>
                </div>
                <div className="mt-5">
                  <fieldset className="">
                    <input type="file" onChange={e => handleSubmit(e.target.files[0])} className='inputFile bg-transparent border-2 rounded-md flex items-center text-black'/>
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
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <circle cx="12" cy="16" r="1" />
                      <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                  </fieldset>
                </div>

                <div className="flex justify-between mt-2">
                  <div>
                    <input
                      className=" m-1 rounded-xl"
                      type="checkbox"
                      name="Notification"
                    />
                    <span className="text-sm">
                      Send notification to my email
                    </span>
                  </div>
                </div>
                  <button type="submit" disabled={buttonSend} className="mt-4 mb-3 w-full bg-gradient-to-b from-[#f49dcd] to-[#f36eb3] text-white py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold text-md h-12 cursor-pointer disabled:opacity-50">Submit</button> 
              </form>
              <GoogleLogin className="flex justify-center items-center mt-4 mb-3 w-full py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold text-xl h-12 cursor-pointer"
                clientId={clientID}
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
                buttonText="Sign up with Google"
              />
              <div className='flex flex-col items-center'>
              <Anchor to="/auth/signin/login" className="mt-2"><span className="mt-6 "> Already have an account? <span className="cursor-pointer text-sm text-fuchsia-400 font-bold">Log in</span></span></Anchor>
              </div>
              <div className='flex self-center'>
                <Anchor to="/" className="mt-2"> Go back to  <span className="cursor-pointer text-sm text-fuchsia-400 font-bold">Home page</span></Anchor>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/public/Rectangle 81.png"
          className="hidden sm:w-1/2 h-full sm:flex object-cover object-top"
        />
      </div>
      
      {modalSuccessIsOpen && (
        <ModalMinga onClose={closeModal}>
          {successModal()}
        </ModalMinga>
      )}
      {onModalSuccessIsOpen && (
        <ModalMinga onClose={closeModal}>
          {onSuccessModal()}
        </ModalMinga>
      )}
      {modalErrorIsOpen && (
        <ModalMinga onClose={closeErrorModal}>
          {errorModal()}
        </ModalMinga>
      )}
    </>
  );
}
