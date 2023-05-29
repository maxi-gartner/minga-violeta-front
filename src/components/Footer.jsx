import Logo from '../assets/images/Logo.png'
import Facebook from '../assets/images/facebook-black.png'
import Twitter from '../assets/images/twitter-black.png'
import Vimeo from '../assets/images/vimeo-black.png'
import Youtube from '../assets/images/youtube-black.png'
import FooterImg from '../assets/images/img-footer.png'
import { Link as Anchor } from "react-router-dom";

export default function Footer(){
  return (
    <div>
      <div className='flex justify-center '>
            <div className='mpb-2 rounded-[0px_0px_50%_50%] overflow-hidden w-screen'>
              <img className='w-full' src={FooterImg}/>
            </div>
        </div>
        <div  className='flex flex-col sm:flex-row items-center justify-between sm:mx-2 pb-5 mt-2 md:mx-10 border-b-2 border-[#cbd5e1]'>
          <div className='w-56 flex justify-evenly text-lg mb-5 sm:mb-0'>
            <Anchor to="/">Home</Anchor>
            <Anchor to="#">Mangas</Anchor>
          </div>
          <div className='flex relative text-white font-medium'>
              <img className='w-20' src={Logo}/>
          </div>
          <div className='flex flex-col items-center mt-4'>
            <div className='flex w-full justify-between'>
                <Anchor to="#">
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-auto h-[22px]"
                  />
                </Anchor>
                <Anchor to="#">
                  <img
                    src={Twitter}
                    alt="Twitter"
                    className="w-auto h-[22px]"
                  />
                </Anchor>
                <Anchor to="#">
                  <img
                    src={Vimeo}
                    alt="Vimeo"
                    className="w-auto h-[22px]"
                  />
                </Anchor>
                <Anchor to="#">
                  <img
                    src={Youtube}
                    alt="Youtube"
                    className="w-auto h-[22px]"
                  />
                </Anchor>
            </div>
            <Anchor to="/donate" className="text-white rounded-md flex justify-center items-center border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-56 p-2 mt-4 text-xl">Donate  <svg
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
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg></Anchor>
          </div>
        </div>
        <div className='h-1 w-full pb-5 mt-2 '></div>
    </div>
  );
}
