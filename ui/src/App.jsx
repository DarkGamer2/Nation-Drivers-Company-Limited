import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import DVDS from './pages/DVDS';
import Course from './pages/Course';
import Signs from './pages/Signs';
import NotFound from './pages/NotFound';
import About from './pages/About';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="signup" element={<BookAppointment/>}/>
      <Route path ="services/dvds" element={<DVDS/>}/>
      <Route path="services/course" element={<Course/>}/>
      <Route path="services/signs" element={<Signs/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="adminlogin" element={<AdminLogin/>}/>
      <Route path="adminsignup" element={<AdminSignup/>}/>
      <Route path="dashboard" element={<AdminDashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
