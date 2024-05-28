import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
// import Profile from "./pages/Profile";
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
        {/*<Route path="/profile" element={<Profile />} />
        <Route path="/profileSetting" element={<ProfileSetting />} />
        */}
      </Routes>
    </>
  );
}

export default App;
