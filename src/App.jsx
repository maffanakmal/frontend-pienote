import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgetPassword from "./Pages/ForgetPassword";
import ForgetPassword2 from "./Pages/ForgetPassword2";
import ForgetPassword3 from "./Pages/ForgetPassword3";
import Home from "./Pages/Home";
import Rating from "./Pages/Rating";
import Profile from "./Pages/Profile";
// import ProfileSetting from "./pages/ProfileSetting";
import CatatanKeuangan from "./Pages/CatatanKeuangan"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catatankeuangan/:section" element={<CatatanKeuangan />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword2" element={<ForgetPassword2 />} />
        <Route path="/forgetpassword3" element={<ForgetPassword3 />} />
        <Route path="/feedback" element={<Rating />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/profileSetting" element={<ProfileSetting />} /> */}
       
      </Routes>
    </>
  );
}

export default App;
