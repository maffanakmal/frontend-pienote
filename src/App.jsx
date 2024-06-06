import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ProfileSetting from "./Pages/ProfileSetting";
import CatatanKeuangan from "./Pages/CatatanKeuangan"
import UserHome from "./Pages/UserHome"
import News from "./Pages/News"

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
      </Routes>
    </>
  );
}

export default App;
