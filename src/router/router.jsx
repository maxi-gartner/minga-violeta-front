import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx"
import LayoutMain from "../layouts/Main.jsx"
import AuthorRegMain from "../pages/authorRegMain.jsx"
import MangaForm from "../pages/MangaForm.jsx"

const routes = createBrowserRouter([
    { path: '/', element:<LayoutMain/>, children:[
        {path: '/', element:<Main/>},
        {path: '/AuthorRegister/:page', element: <AuthorRegMain/>},
        {path: '/manga-form', element: <MangaForm/>}
    ]}
])

export default routes