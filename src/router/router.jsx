import { createBrowserRouter } from "react-router-dom";
import Main from "../App.jsx"
import LayoutMain from "../layouts/Main.jsx"
import AuthorRegMain from "../pages/authorRegMain.jsx"
import SignUp from "../pages/signUp.jsx";
import SignIn from "../pages/signIn.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/AuthorRegister/:page", element: <AuthorRegMain /> },
      { path: "/auth/signup", element: <SignUp /> },
      { path: "/auth/signin", element: <SignIn /> },
    ],
  },
]);

export default routes