import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import { AdminProvider } from "./components/Auth/AdminContext";
import Profile from "./routes/StationProfile/Profile";

function App() {
  return (
    <div className="App">
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </AdminProvider>
    </div>
  );
}

export default App;
