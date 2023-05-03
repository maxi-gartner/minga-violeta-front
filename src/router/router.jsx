import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx"
import LayoutMain from "../layouts/Main.jsx"
import AuthorRegMain from "../pages/authorRegMain.jsx"
import SignUp from "../pages/signUp.jsx";
import SignIn from "../pages/signIn.jsx";
import MangaForm from "../pages/MangaForm.jsx"
import ChapterForm from "../pages/ChapterForm.jsx"


const routes = createBrowserRouter([
    { path: '/', element:<LayoutMain/>, children:[
        {path: '/', element:<Main/>},
        {path: '/AuthorRegister/:page', element: <AuthorRegMain/>},
        {path: '/manga-form', element: <MangaForm/>},
        {path: "/auth/signup", element: <SignUp />},
        {path: "/auth/signin", element: <SignIn />},
        {path: '/chapter-form/:id_manga', element:<ChapterForm/>}
    ]}
])
export default routes