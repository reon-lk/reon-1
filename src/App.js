import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Dashboard from './Pages/Admin/Dashboard';
import Users from './Pages/Admin/Users';
import Pages from './Pages/Admin/Pages';
import VehiclesBus from './Pages/Admin/Vehicles/Bus';
import VehiclesCar from './Pages/Admin/Vehicles/Car';
import HireBus from './Pages/Admin/Hires/Bus';
import HireCar from './Pages/Admin/Hires/Car';
import Profile from './Pages/Admin/Profile';
import PageSetting from './Pages/Admin/PageSetting';
import PageDetails from './Pages/Admin/PageDetails';
import UserHeader from './Layouts/UserHeader';
import Category from './Pages/User/VehiclePage/VehiclePage';
import VehicleDetails from './Pages/User/VehiclePage/VehicleDetails';
import OwnerPage from './Pages/OwnerPage/OwnerPage';
import HireDetails from './Pages/Admin/HireDetails';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route exact path="/Admin" element={<Dashboard/>} />
      <Route exact path="/Users" element={<Users/>} />
      <Route exact path="/Pages" element={<Pages/>} />
      <Route exact path="/VehiclesBus" element={<VehiclesBus/>} />
      <Route exact path="/VehiclesCar" element={<VehiclesCar/>} />
      <Route exact path="/HiresBus" element={<HireBus/>} />
      <Route exact path="/HiresCar" element={<HireCar/>} />
      <Route exact path="/Profile" element={<Profile/>} />
      <Route exact path="/PageSetting" element={<PageSetting/>} />
      <Route exact path="/PageDetails" element={<PageDetails/>} />
      <Route exact path="/UserHeader" element={<UserHeader/>} />
      <Route exact path="/VehiclePage" element={<Category/>} />
      <Route exact path="/VehicleDetails" element={<VehicleDetails/>} />
      <Route exact path="/OwnerPage" element={<OwnerPage/>} />
      <Route exact path="/HireDetails" element={<HireDetails/>} />

      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
