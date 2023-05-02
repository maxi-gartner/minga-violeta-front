import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx"
import LayoutMain from "../layouts/Main.jsx"
import AuthorRegMain from "../pages/authorRegMain.jsx"

const routes = createBrowserRouter([
    { path: '/', element:<LayoutMain/>, children:[
        {path: '/', element:<Main/>},
        {path: '/AuthorRegister/:page', element: <AuthorRegMain/>}
    ]}
])

export default routes