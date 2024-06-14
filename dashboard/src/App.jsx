import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apotek from './pages/apotek.jsx';
import Inventory from './pages/inventory/inventory.jsx';
import AddInventory from './pages/inventory/inventoryadd.jsx';
import EditInventory from './pages/inventory/inventoryedit.jsx';
import Obat from './pages/obat/obat.jsx';
import AddObat from './pages/obat/obatadd.jsx';
import EditObat from './pages/obat/obatedit.jsx';
import Kategori from './pages/kategori/kategori.jsx';
import AddKategori from './pages/kategori/kategoriadd.jsx';
import EditKategori from './pages/kategori/kategoriedit.jsx';
import Kustomer from './pages/kustomer/kustomer.jsx';
import AddKustomer from './pages/kustomer/kustomeradd.jsx';
import EditKustomer from './pages/kustomer/kustomeredit.jsx';
import Profile from './pages/profil/profile.jsx';
import EditProfile from './pages/profil/profileedit.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Apotek />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/addinventory" element={<AddInventory />} />
      <Route path="/editinventory/:id" element={<EditInventory />} />
      <Route path="/obat" element={<Obat />} />
      <Route path="/addobat" element={<AddObat />} />
      <Route path="/editobat/:id" element={<EditObat />} />
      <Route path="/kategori" element={<Kategori />} />
      <Route path="/addkategori" element={<AddKategori />} />
      <Route path="/editkategori/:id" element={<EditKategori />} />
      <Route path="/kustomer" element={<Kustomer />} />
      <Route path="/addkustomer" element={<AddKustomer />} />
      <Route path="/editkustomer/:id" element={<EditKustomer />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/editprofile" element={<EditProfile />} />
    </Routes>
  </Router>
);

export default App;
