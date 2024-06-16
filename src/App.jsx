import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import ForgetPassword2 from "./Pages/ForgetPassword2";
import ForgetPassword3 from "./Pages/ForgetPassword3";
import Home from "./Pages/Home";
import Tabungan from "./Pages/Tabungan";
// <<<<<<< HEAD
// import Rating from "./Pages/Rating";
import Profile from "./Pages/Profile";
// import ProfileSetting from "./pages/ProfileSetting";
// =======
// import Profile from "./Pages/Profile";
import ProfileSetting from "./Pages/ProfileSetting";
// >>>>>>> 7bd083fdd80aba0e5e5783c2e9af818a9722af7d
import CatatanKeuangan from "./Pages/CatatanKeuangan"
import UserHome from "./Pages/UserHome"
import News from "./Pages/News"
import TabunganP1 from "./Pages/TabunganP1"
import TabunganB1 from "./Pages/TabunganB1"
import TabunganStar from "./Pages/TabunganStar"
import Deskripsi from "./Pages/Deskripsi"
// import Tabungan from "./Pages/Tabungan"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/catatankeuangan/:section" element={<CatatanKeuangan />} />
{/* <<<<<<< HEAD */}
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword2" element={<ForgetPassword2 />} />
        <Route path="/forgetpassword3" element={<ForgetPassword3 />} />
        {/* <Route path="/feedback" element={<Rating />} /> */}
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/profileSetting" element={<ProfileSetting />} /> */}
       
=======
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        <Route path="/tabungan" element={<Tabungan/>} />
        <Route path="/tabunganP1" element={<TabunganP1/>} />
        <Route path="/tabunganB1" element={<TabunganB1/>} />
        <Route path="/tabunganStar" element={<TabunganStar/>} />
        <Route path="/deskripsi" element={<Deskripsi/>} />
{/* >>>>>>> 7bd083fdd80aba0e5e5783c2e9af818a9722af7d */}
      </Routes>
    </>
  );
}

export default App;
