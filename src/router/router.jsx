import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx";
import LayoutMain from "../layouts/main.jsx";
import AuthorForm from "../pages/AuthorForm.jsx";
import SignUp from "../pages/signUp.jsx";
import SignIn from "../pages/signIn.jsx";
import MangaForm from "../pages/MangaForm.jsx";
import ChapterForm from "../pages/ChapterForm.jsx";
import CompanyForm from "../pages/CompanyForm.jsx";
import DetailsManga from "../pages/DetailsManga.jsx";
import Mangas from "../pages/Mangas.jsx";
import ChapterPages from "../pages/Page.jsx";
import NewRole from "../pages/NewRole.jsx";
import AdminPanel from "../pages/AdminPanel.jsx";
import MyMangas from "../pages/MyMangas.jsx";
import { Navigate } from "react-router-dom";

let token = () => localStorage.getItem('token')
let role = () => JSON.parse(localStorage.getItem('role'))
//console.log(role())
//console.log(token())

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/", element: <Main /> },
      //{ path: '/auth', element: <Authform /> },
      { path: "/manga-form", element: role() === 1 || role() === 2 && token() ? <MangaForm /> : <Navigate to="/" /> },
      { path: "/auth/signup/:url", element: <SignUp /> },
      { path: "/auth/signin/:url", element: <SignIn /> }, //  sigue=> /login
      { path: "/chapter-form", element: <ChapterForm /> },
      { path: "/AuthorRegister/:url", element: token() ? <AuthorForm /> : <Navigate to="/" /> },
      { path: "/CompanyForm/:url", element: token() ? <CompanyForm /> : <Navigate to="/" /> },
      { path: "/DetailsManga/:id", element: <DetailsManga /> },
      { path: "/chapter-form/:id_manga", element: <ChapterForm /> },
      { path: "/mangas/:url", element: <Mangas /> },
      { path: "/chapters/:id/:page", element: <ChapterPages /> },
      { path: "/new-role/:url", element: role() === 0 && token() ? <NewRole /> : <Navigate to="/" /> },
      { path: "/MyMangas", element: <MyMangas /> },
      { path: "/admin/:url", element: role() === 3 && token() ? <AdminPanel /> : <Navigate to="/" /> }
    ],
  },
]);
export default routes;