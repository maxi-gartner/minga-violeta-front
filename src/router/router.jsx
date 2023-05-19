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
import EditChapter from "../pages/EditChapter.jsx";
import NewRole from "../pages/NewRole.jsx";
import AdminPanel from "../pages/AdminPanel.jsx";
import MyMangas from "../pages/MyMangas.jsx";
import { Navigate } from "react-router-dom"

let token = localStorage.getItem('token')
let role = JSON.parse(localStorage.getItem('role'))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/AuthorRegister/:url", element: <AuthorForm /> },
      //{ path: '/auth', element: <Authform /> },
      { path: "/manga-form", element: <MangaForm /> },
      { path: "/auth/signup/:url", element: <SignUp /> },
      { path: "/auth/signin/:url", element: <SignIn /> }, //  sigue=> /login
      { path: "/chapter-form", element: <ChapterForm /> },
      { path: "/CompanyForm/:url", element: <CompanyForm /> },
      { path: "/DetailsManga/:id", element: <DetailsManga /> },
      { path: "/chapter-form/:id_manga", element: role === 1 || role === 2 && token ? <ChapterForm /> : <Navigate to="/" /> },
      { path: "/mangas/:url", element: <Mangas /> },
      { path: "/chapters/:id/:page", element: <ChapterPages />},
      { path: "/edit/:id_manga", element: role === 1 || role === 2 && token ? <EditChapter /> : <Navigate to="/" />},
      { path: "/MyMangas", element: <MyMangas />}
      { path: "/new-role/:url", element: <NewRole /> },
      { path: "/admin/:url", element: <AdminPanel /> }
    ],
  },
]);
export default routes;