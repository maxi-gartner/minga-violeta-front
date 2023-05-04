import VITE_API from '../../api'
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios';

 const signIn = () => {
  let email = useRef();
  let password = useRef();

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
       })
       .catch(error => { console.log(error) })
   }
      

    return (
      <>
        <div className="h-screen w-full flex justify-center items-center bg-white">
          <img
            src="/public/fondosignin.png"
            className="hidden sm:w-1/2 h-full sm:flex object-cover object-top "
          />
          <div className="flex justify-center w-1/2 bg-white">
            <div className="bg-white min-h-screen w-1/2 flex justify-center items-center">
              <div className="flex flex-col">
                <form onSubmit={(e) => handleForm(e)}>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl text-center font-semibold text-gray-800">
                      Welcome!
                    </span>
                    <h1 className="text-m text-center text-gray-550 mt-4">
                      Discover manga, manhua and manhwa, track your <br></br>{" "}
                      progress, have fun, read manga.
                    </h1>
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
                        width=""
                        height=""
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                      </svg>
                    </fieldset>
                  </div>

                  <div className="flex justify-between mt-2"></div>
                  <div className="">
                    <input
                      className="mt-4 mb-3 w-full bg-gradient-to-b from-[#f49dcd] to-[#f36eb3] text-white py-2 rounded-xl transition duration-100 shadow-cyan-600 font-bold text-md h-12 "
                      type="submit"
                      value="Sign in"
                    />
                  </div>
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
                <div className="flex flex-col items-center">
                  <Link to="/auth/signup" className="mt-6 text-[12px] ">
                    {" "}
                    you don't have an account yet?{" "}
                    <span className="cursor-pointer text-[11px] text-fuchsia-500 font-bold">
                      Sign up
                    </span>
                  </Link>
                  <Link to="/" className="mt-2 text-[12px]">
                    {" "}
                    Go back to{" "}
                    <span className="cursor-pointer text-[11px] text-fuchsia-500 font-bold">
                      Home page
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  };
  


export default signIn