import { Link as Anchor } from "react-router-dom";
import axios from 'axios'
import apiUrl from "../../api"

export default function Donate2() {

  function handleDonate(donate) {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization' : `Bearer ${token}`}}
    let data = donate
    console.log(data)
    axios.post(apiUrl+"donate", data, headers)
        .then( res => window.location.href = res.data.response.body.init_point);           
  }

  //Cards Styles
  const cardDonate =
    "w-[56vw] h-[38vh] my-5 sm:w-[25vh] md:w-[20vh] md:h-[30vh] lg:w-[14vw] lg:h-[38vh] bg-white rounded-lg flex justify-center items-center drop-shadow-md hover:transition-all duration-[0.4s] hover:z-10 hover:scale-[1.1]";

  const buttonDonate =
    "w-[80%] lg:w-[75%] z-10 flex items-center justify-end rounded-md text-sm font-bold text-white bg-gradient-to-r from-[#F9A8D4] to-[#F472B6]";

  //Data Donations
  const donations = [
    {
      id: 1,
      title: "1.000 ARS",
      currency_id: "ARS",
      unit_price: 1000,
      quantity: 1,
    },
    {
      id: 2,
      title: "5.000 ARS",
      currency_id: "ARS",
      unit_price: 5000,
      quantity: 1,
    },
    {
      id: 3,
      title: "10.000 ARS",
      currency_id: "ARS",
      unit_price: 10000,
      quantity: 1,
    },
  ];

  return (
    <div className="w-full h-full sm:h-screen flex flex-col justify-center items-center bg-[url(../../public/bgdonate2.jpg)] bg-cover">
      <div className="flex flex-col w-full lg:w-[65vw] lg:h-[80vh] lg:rounded-xl bg-[#EBEBEB]">
        <div className="divide-y divide-slate-800/25 text-gray-700">
          <h1 className="text-2xl mb-3 text-center font-montserrat pt-24 sm:pt-6 font-bold">
            Donate to Developers
          </h1>
          <p className="p-4 text-center font-montserrat">
            Choose the amount you want to donate
          </p>
        </div>
        <div className="flex flex-col sm:pt-0 sm:flex-row sm:justify-evenly items-center">
          <div className={cardDonate}>
            <div className="w-[94%] h-[95%] bg-orange-400 rounded-md flex flex-col justify-around items-center">
              <div class="w-32 h-32 bg-orange-300 rounded-full">
                <img
                  className="absolute bottom-0 h-[43vh] md:h-[32vh] lg:h-[42vh] min-w-fit right-2 lg:right-4"
                  src="../../public/card-donate1.png"
                  alt="pokemon"
                />
              </div>
              <button className={buttonDonate} key={donations[0].id} value={donations[0].id} onClick={()=>{handleDonate(donations[0])}}>
                <img
                  className="w-9 left-3 lg:left-6 absolute"
                  src="../../public/moneda.png"
                  alt="moneda"
                />
                <span className="m-1 text-center pr-2">
                  {donations[0].title}
                </span>
              </button>
            </div>
          </div>
          <div className={cardDonate}>
            <div className="w-[94%] h-[95%] bg-violet-400 rounded-md flex flex-col justify-around items-center">
              <div class="w-32 h-32 bg-violet-300 rounded-full">
                <img
                  className="absolute bottom-0 h-[42vh] md:h-[32vh] lg:h-[42vh] min-w-fit right-0"
                  src="../../public/seinen-character.png"
                  alt="seinen"
                />
              </div>
              <button className={buttonDonate} key={donations[1].id} value={donations[1].id} onClick={()=>{handleDonate(donations[1])}}>
                <img
                  className="w-9 left-3 lg:left-6 absolute"
                  src="../../public/moneda.png"
                  alt="moneda"
                />
                <span className="m-1 text-center pr-2">
                  {donations[1].title}
                </span>
              </button>
            </div>
          </div>
          <div className={cardDonate}>
            <div className="w-[94%] h-[95%] bg-emerald-400 rounded-md flex flex-col justify-around items-center">
              <div class="w-32 h-32 bg-emerald-300 rounded-full">
                <img
                  className="absolute bottom-0 h-[42vh] md:h-[32vh] lg:h-[42vh] min-w-fit right-2"
                  src="../../public/card-donate3.png"
                  alt="naruto"
                />
              </div>
              <button className={buttonDonate} key={donations[2].id} value={donations[2].id} onClick={()=>{handleDonate(donations[2])}}>
                <img
                  className="w-9 left-3 lg:left-6 absolute"
                  src="../../public/moneda.png"
                  alt="moneda"
                />
                <span className="m-1 text-center pr-2">
                  {donations[2].title}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center items-center m-2 sm:m-0">
          <p className="text-xs text-center font-semibold font-montserrat text-gray-700 pr-2">
            This donation will be processed through the secure platform of:
          </p>
          <Anchor to="https://www.mercadopago.com.ar/home">
            <img
              className="w-[100px] h-auto"
              src="../../public/mercadopago.svg"
              alt="mercadopagpo"
            />
          </Anchor>
        </div>
        <div>
          <Anchor
            to="/"
            className="text-md font-bold flex justify-center text-[#F472B6] mb-16 md:m-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>

            <span className="pl-2">Back to Home</span>
          </Anchor>
        </div>
      </div>
    </div>
  );
}
