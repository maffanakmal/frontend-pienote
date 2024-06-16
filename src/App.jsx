import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileSetting from './pages/ProfileSetting';
import SettingsBahasa from './pages/SettingsBahasa';
import CatatanKeuangan from './pages/CatatanKeuangan';
import UserHome from './pages/UserHome';
import News from './pages/News';
import UserNews from './pages/UserNews';
import Article from './pages/Article';
import ForgetPassword from './pages/ForgetPassword';
import SplitBill from './pages/SplitBill';
import ProtectedRoute from './middleware/ProtectedRoute';
import PublicRoute from './middleware/PublicRoute';
import CatatanTabungan from './pages/CatatanTabungan';
import TabunganPribadi from './Fragments/Catatan-tabungan/TabunganPribadi';
import TabunganBersama from './Fragments/Catatan-tabungan/TabunganBersama';
import DetailTabugan from './Fragments/Catatan-tabungan/TabunganDetail';
import Rating from './pages/Rating';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Home />
    ),
    errorElement: <Error />,
  },
  {
    path: '/news',
    element: (
        <News />
    ),
  },
  {
    path: '/login',
    element: (
        <Login />
    ),
  },
  {
    path: '/forgetpassword/:section',
    element: (
        <ForgetPassword />
    ),
  },
  {
    path: '/register',
    element: (
        <Register />
    ),
  },
  {
    path: '/home',
    element: (
        <UserHome />
    ),
  },
  {
    path: '/article',
    element: (
        <UserNews />
    ),
  },
  {
    path: '/article/:section',
    element: (
        <Article />
    ),
  },
  {
    path: '/catatantabungan',
    element: (
        <CatatanTabungan />
    ),
  },
  {
    path: '/tabunganpribadi',
    element: (
        <TabunganPribadi />
    ),
  },
  {
    path: '/tabunganbersama',
    element: (
        <TabunganBersama />
    ),
  },
  {
    path: '/catatankeuangan/:section',
    element: (
        <CatatanKeuangan />
    ),
  },
  {
    path: '/berbagitagihan',
    element: (
        <SplitBill />
    ),
  },
  {
    path: '/rating',
    element: (
        <Rating />
    ),
  },
  {
    path: '/detailtabungan',
    element: (
        <DetailTabugan />
    ),
  },
  {
    path: '/profile',
    element: (
        <Profile />
    ),
  },
  {
    path: '/profilesetting',
    element: (
        <ProfileSetting />
    ),
  },
  {
    path: '/settingsbahasa',
    element: (
        <SettingsBahasa />
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
