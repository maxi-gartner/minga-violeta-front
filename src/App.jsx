import './App.css'

function App() {

  return (
    <body className='mx-24'>
    <nav className='flex justify-between items-center px-5 pb-10 pt-5 w-full h-16'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10  h-10 text-[#F472B6] mt-14">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
        <div className='flex relative mt-14'>
            <img className='mt-1 w-20' src="./src/images/Star.png"/>
            <div className='bg-black absolute top-8 p-1'>
              <img src="./src/images/Minga.png"/>
            </div>
            <div className='bg-black absolute left-7 px-1'>
              <img src="./src/images/img-logo-top.png"/>
            </div>
            <div className='bg-black absolute left-7 top-10 mt-3 pt-1 px-1'>
              <img src="./src/images/img-logo-bottom.png"/>
            </div>
        </div>
    </nav>
    <main className='w-full'>
        <div className='flex relative items-center my-10 bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] h-60 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute left-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className='w-5/12 h-full flex items-end justify-around mr-52'>
                <img className='w-60 ' src="./src/images/img-carousel.png"/>
                <img className='w-40 h-60 mb-8' src="./src/images/img2-carousel.png"/>
            </div>
            <div className='w-3/12 top-20 right-80 text-l text-white	'>
                <h3 className='text-4xl'>Shonen</h3>
                <p>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute right-10 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
        <div className='relative w-full'>
            <div className='absolute flex flex-col pl-20 justify-center text-white h-full w-full bg-black bg-opacity-50'>
                <h2 className='text-8xl mb-2'>Live the emotion of the manga</h2>
                <p className='text-3xl mb-2'>Find the perfect manga for you</p>
                <p className='text-1xl mb-2 font-bold'>#MingaForever 🔥</p>
                <button className="rounded-none flex border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-56 p-2 justify-center text-xl">Sign In!</button>
            </div>
            <img className='w-full rounded-lg' src="./src/images/img-main.jpg"/>
        </div>
    </main>
    <footer>
        <div className='flex justify-center '>
            <div className='mb-10 rounded-b-full overflow-hidden w-screen'>
              <img className='mt-1 w-full' src="./src/images/img-footer.png"/>
            </div>
        </div>
        <div  className='flex items-center justify-between mb-10 pb-5 border-b-2 border-[#cbd5e1]'>
            <div>
                <a className='mr-10 text-xl' href="">Home</a>
                <a className='text-xl' href="">Mangas</a>
            </div>
            <div className='flex relative mt-4'>
                <img className='mt-1 w-20' src="./src/images/Star.png"/>
                <div className='bg-black absolute top-8 p-1'>
                  <img src="./src/images/Minga.png"/>
                </div>
                <div className='bg-black absolute left-7 px-1'>
                  <img src="./src/images/img-logo-top.png"/>
                </div>
                <div className='bg-black absolute left-7 top-10 mt-3 px-1  pt-1'>
                  <img src="./src/images/img-logo-bottom.png"/>
                </div>
            </div>
            <div className='flex flex-col w-80 items-center'>
              <div className='flex w-full justify-evenly'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
              </div>
              <button className="rounded-none flex border-none bg-gradient-to-r from-[#F9A8D4] to-[#F472B6] w-56 p-2 justify-center mt-2 text-xl">Donate ❤️</button>
            </div>
        </div>
    </footer>
</body>
  )
}

export default App
