import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileSetting from './pages/ProfileSetting';
import SettingsMataUang from './pages/SettingsUang';
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
import DetailTabuganPribadi from './Fragments/Catatan-tabungan/TabunganDetailPribadi';
import DetailTabuganBersama from './Fragments/Catatan-tabungan/TabunganDetailBersama';
import Rating from './pages/Rating';
import ContactUs from './pages/ContactUs';
import AccountSetting from './pages/SettingsAccount';
import PasswordAccount from './Fragments/Account/AccountPage';
import PasswordTabungan from './Fragments/Account/PasswordTabungan';
import PasswordKeuangan from './Fragments/Account/PasswordKeuangan';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <Home />
    ),
    errorElement: <NotFound />,
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
    path: '/contact',
    element: (
        <ContactUs />
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
    path: '/detailtabunganpribadi/:personalsaving_id',
    element: (
        <DetailTabuganPribadi/>
    ),
  },
  {
    path: '/detailtabunganbersama/:groupsavings_id',
    element: (
        <DetailTabuganBersama/>
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
    path: '/accountsetting',
    element: (
        <AccountSetting />
    ),
  },
  {
    path: '/settingmatauang',
    element: (
        <SettingsMataUang />
    ),
  },
  {
    path: '/passwordaccount',
    element: (
        <PasswordAccount />
    ),
  },
  {
    path: '/passwordtabungan',
    element: (
        <PasswordTabungan />
    ),
  },
  {
    path: '/passwordkeuangan',
    element: (
        <PasswordKeuangan />
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
