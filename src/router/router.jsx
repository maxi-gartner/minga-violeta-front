import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx"
import LayoutMain from "../layouts/Main.jsx"
import AuthorForm from "../pages/AuthorForm.jsx"
import SignUp from "../pages/signUp.jsx";
import SignIn from "../pages/signIn.jsx";
import MangaForm from "../pages/MangaForm.jsx"
import ChapterForm from "../pages/ChapterForm.jsx"
<<<<<<< HEAD
import CompanyForm from "../pages/CompanyForm.jsx"

=======
>>>>>>> 74cb359afb7013b5abe5d5c106ac3312017ea629


const routes = createBrowserRouter([
    { path: '/', element:<LayoutMain/>, children:[
        {path: '/', element:<Main/>},
        {path: '/AuthorRegister/:page', element: <AuthorForm/>},
        {path: '/manga-form', element: <MangaForm/>},
<<<<<<< HEAD
        { path: "/auth/signup", element: <SignUp /> },
        { path: "/auth/signin", element: <SignIn /> },
        { path: '/chapter-form/:id_manga', element:<ChapterForm/>},
        {path: '/CompanyForm/:page', element: <CompanyForm/>}
=======
        {path: "/auth/signup", element: <SignUp />},
        {path: "/auth/signin", element: <SignIn />},
        {path: '/chapter-form/:id_manga', element:<ChapterForm/>}
>>>>>>> 74cb359afb7013b5abe5d5c106ac3312017ea629
    ]}
])
export default routes