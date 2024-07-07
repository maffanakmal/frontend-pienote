import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound'; // Correct the import statement
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
import ProtectedRoute from './protect-route/authenticatedRoute';
import PublicRoute from './protect-route/publicRoute';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
              <Login />
          }
        />
        <Route
          path="/register"
          element={
              <Register />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/forgetpassword/:section" element={<ForgetPassword />} />
        <Route path="/news" element={<News />} />

        <Route path="/home" element={<UserHome />} />
        <Route path="/article" element={<UserNews />} />
        <Route path="/article/:section" element={<Article />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/catatantabungan" element={<CatatanTabungan />} />
        <Route path="/tabunganpribadi" element={<TabunganPribadi />} />
        <Route path="/tabunganbersama" element={<TabunganBersama />} />
        <Route path="/catatankeuangan/:section" element={<CatatanKeuangan />} />
        <Route path="/berbagitagihan" element={<SplitBill />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/detailtabunganpribadi/:personalsaving_id" element={<DetailTabuganPribadi />} />
        <Route path="/detailtabunganbersama/:groupsavings_id" element={<DetailTabuganBersama />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profilesetting" element={<ProfileSetting />} />
        <Route path="/accountsetting" element={<AccountSetting />} />
        <Route path="/settingmatauang" element={<SettingsMataUang />} />
        <Route path="/passwordaccount" element={<PasswordAccount />} />
        <Route path="/passwordtabungan" element={<PasswordTabungan />} />
        <Route path="/passwordkeuangan" element={<PasswordKeuangan />} />

        <Route path="*" element={<NotFound />} /> {/* Correct the route for NotFound */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
