import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx";
import LayoutMain from "../layouts/main.jsx";
import AuthorForm from "../pages/AuthorForm.jsx";
import SignUp from "../pages/signUp.jsx";
import SignIn from "../pages/signIn.jsx";
import MangaForm from "../pages/MangaForm.jsx";
import ChapterForm from "../pages/ChapterForm.jsx";
import CompanyForm from "../pages/CompanyForm.jsx";
import ChapterPages from "../pages/Page.jsx";
//import Authform from "../pages/AuthForm.jsx";

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
      { path: "/chapter-form/:id_manga", element: <ChapterForm /> },
      { path: "/CompanyForm/:url", element: <CompanyForm /> },
      { path: "/chapters/:url/:id/:page", element: <ChapterPages />}
    ],
  },
]);
export default routes;
