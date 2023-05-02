import { useRef } from "react";
import axios from "axios";
const data = JSON.parse(localStorage.getItem('userLoged')) || [];

export default function AuthorRegister() {
  const name = useRef()
  const lastName = useRef()
  const country = useRef()
  const birthdate = useRef()
  const img = useRef()
  function handleForm(e){
    const user = JSON.parse(localStorage.getItem('userLoged')) || [];
    e.preventDefault()
    let dataCity =  country.current.value.split(',')[0]
    let dataCountry =  country.current.value.split(',')[1]
    let data = {
      name: name.current.value,
      last_name: lastName.current.value,
      city: dataCity,
      country:dataCountry,
      date: birthdate.current.value,
      photo: img.current.value,
      active: true,
      user_id: user._id
    }
    console.log(data);
    axios.post("http://localhost:8000/authors/create", data).then(res=> console.log(res))
  }


  return (
    <div className="flex h-screen">
      <img src="../../public/naruto-authors.jpg" alt="" className="hidden sm:w-1/2 sm:flex object-cover object-top"/>
      <div className="bg-[#EBEBEB] w-screen h-screen flex flex-col justify-around pt-32 pb-10 items-center sm:w-1/2 ">
        <h1 className="text-black text-3xl ">New Author</h1>
        <div className="mr-5 rounded-full overflow-hidden shadow-[0px_0px_20px_4px_rgba(0,0,0,0.56)]">
          <img src={data.photo} alt="" />
        </div>
        <form onSubmit={handleForm}  className="text-black h-2/3 flex flex-col justify-between pb-5 w-full px-[15vw] sm:px-[5vw] xl:px-[10vw]">
          <div className="grid h-full py-5">
            <div className="relative z-0">
                <input type="text" name="floating_first_name" id="floating_first_name" ref={name} className="block py-2.5 px-0 w-full  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#F472B6] focus:outline-none focus:ring-0 focus:border-[#F472B6] peer " placeholder=" "  autoComplete="off" />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-lg text-black  duration-300 transform -translate-y-10  bottom-16 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-[#F472B6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 ">First name</label>
            </div>
            <div className="relative z-0">
                <input type="text" name="floating_first_name" id="floating_first_name" ref={lastName} className="block py-2.5 px-0 w-full  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#F472B6] focus:outline-none focus:ring-0 focus:border-[#F472B6] peer " placeholder=" "  autoComplete="off" />
                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-lg text-black  duration-300 transform -translate-y-10  bottom-16 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-[#F472B6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9 ">Last name</label>
            </div>
            <div className="relative z-0 w-full">
                <input  type="text" name="floating_last_name" id="floating_last_name" ref={country} className="block py-2.5 px-0 w-full  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#F472B6] focus:outline-none focus:ring-0 focus:border-[#F472B6] peer" placeholder=" " autoComplete="off"  required/>
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-10  bottom-16 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-[#F472B6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9">City and country (Comma separated)</label>
            </div>
            <div className="relative z-0 w-full">
                <input type="date" name="floating_last_name" id="floating_last_name" ref={birthdate} className="block py-2.5 px-0 w-full  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#F472B6] focus:outline-none focus:ring-0 focus:border-[#F472B6] peer" placeholder=" " required autoComplete="off"  />
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-10  bottom-14 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-[#F472B6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  ">Birthdate</label>
            </div>
            <div className="relative z-0 w-full">
                <input type="text" name="floating_last_name" id="floating_last_name" ref={img} className="block py-2.5 px-0 w-full  text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-[#F472B6] focus:outline-none focus:ring-0 focus:border-[#F472B6] peer" placeholder=" " required autoComplete="off" />
                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-10  bottom-16 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-[#F472B6] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-9">URL Profile Image</label>
            </div>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
        </form>
      </div>
    </div>
  );
}
