import { Link as Anchor } from "react-router-dom";

export default function DonateFailed() {
  return (
    <div className="w-full h-full sm:h-screen flex flex-col justify-center items-center bg-[url(../../public/bgdonate2.jpg)] bg-cover">
      <div className="flex flex-col w-full lg:w-[65vw] lg:h-[60vh] lg:rounded-xl bg-[#EBEBEB] p-8">
        <div className="divide-y divide-slate-800/2">
          <h1 className="text-2xl mb-3 text-center font-montserrat pt-24 sm:pt-6 font-bold text-orange-400">
            Oh no!
          </h1>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-40 h-40 fill-orange-400"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p className="p-4 text-center text-sm font-montserrat text-gray-700">
            Unfortunately, a problem has occurred with the processing of your
            donation. Appreciate your interest in supporting us and hope so that
            soon you can make your donation successfully.
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
