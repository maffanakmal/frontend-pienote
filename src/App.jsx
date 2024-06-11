import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSetting from "./pages/ProfileSetting";
import CatatanKeuangan from "./pages/CatatanKeuangan";
import UserHome from "./pages/UserHome";
import News from "./pages/News";
import UserNews from "./pages/UserNews";
import Article from "./pages/Article";
import ForgetPassword from "./pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgetpassword/:section',
    element: <ForgetPassword />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: (
        <UserHome />
    )
  },
  {
    path: '/article',
    element: (
        <UserNews />
    )
  },
  {
    path: '/article/:section',
    element: (
        <Article />
    )
  },
  {
    path: '/catatankeuangan/:section',
    element: (
        <CatatanKeuangan />
    )
  },
  {
    path: '/profile',
    element: (
        <Profile />
    )
  },
  {
    path: '/profilesetting',
    element: (
        <ProfileSetting />
    )
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
