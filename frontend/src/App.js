import React from "react";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Apotek from './pages/Apotek'
import Signin from './pages/Signin';
import Register from './components/Signup';
import MyProfil from './components/Profil';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apotek />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MyProfil" element={<MyProfil />} />
      </Routes>
    </Router>
  )
  
}

export default App;