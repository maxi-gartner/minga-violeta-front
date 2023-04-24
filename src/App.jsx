import apiUrl from "../api"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
  console.log(apiUrl)

  return (
    <div className='xl:mx-24 sm:mx-0 bg-black text-white sm:text-black sm:bg-white'>
    <nav>
      <Navbar/>
    </nav>
    <main>
      <Main/>
    </main>
    <footer>
        <Footer/>
    </footer>
</div>
  )
}

export default App
