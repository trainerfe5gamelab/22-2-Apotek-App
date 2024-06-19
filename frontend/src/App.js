import React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Apotek from './pages/Apotek'
import Signin from './pages/Signin';
import Register from './components/Signup';
import MyProfil from './components/Profil';
import ApotekDashboard from './pages/ApotekDashboard';
import AdminLogin from './components/LoginAdmin';
import Obat from './pages/obat/obat.js';
import AddObat from './pages/obat/obatadd.js';
import EditObat from './pages/obat/obatedit.js';
import Profile from './pages/profil/profile.js';
import EditProfile from './pages/profil/profileedit.js';
import Kustomer from './pages/kustomer/kustomer.js';
import AddKustomer from './pages/kustomer/kustomeradd.js';
import EditKustomer from './pages/kustomer/kustomeredit.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apotek />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MyProfil" element={<MyProfil />} />
        <Route path="/dashboard" element={<ApotekDashboard />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/obat" element={<Obat />} />
        <Route path="/addobat" element={<AddObat />} />
        <Route path="/editobat/:id" element={<EditObat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/users" element={<Kustomer />} />
        <Route path="/addusers" element={<AddKustomer />} />
        <Route path="/editusers/:id" element={<EditKustomer />} />
      </Routes>
    </Router>
  )
  
}

export default App;