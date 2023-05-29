import { Link as Anchor } from "react-router-dom";

export default function DonateSuccess() {
  
  return (
    <div className="w-full h-full sm:h-screen flex flex-col justify-center items-center bg-[url(../../public/bgdonate2.jpg)] bg-cover">
      <div className="flex flex-col w-full lg:w-[65vw] lg:h-[65vh] lg:rounded-xl bg-[#EBEBEB] p-8">
        <div className="divide-y divide-slate-800/2">
          <h1 className="text-2xl mb-3 text-center font-montserrat pt-24 sm:pt-6 font-bold text-green-600">
            Thank you for your generous donation!
          </h1>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-40 h-40 fill-green-600"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="p-4 text-center text-sm font-montserrat text-gray-700">
            Your support is essential to continue the development and
            improvement of our application. We deeply value your contribution
            and hope you continue to enjoy all the features and benefits our app
            offers. Thanks again for making our work possible!
          </p>
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
