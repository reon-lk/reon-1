import "./App.css";
// import AppRouter from './AppRouter';
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";
import Hires from "./views/Hires";
import Pages from "./views/Pages";
import Vehicles from "./views/Vehicles";
import Profile from "./views/Profile";
import PageSettings from "./views/PageSettings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/Hires" element={<Hires />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/PageSettings" element={<PageSettings />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Vehicles" element={<Vehicles />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
