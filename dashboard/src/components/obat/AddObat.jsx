import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddObat.css'; // Import the CSS file

const AddObat = () => {
  const [NamaObat, setNamaObat] = useState("");
  const [NamaGenerik, setNamaGenerik] = useState("");
  const [Dosis, setDosis] = useState("");
  const [BentukSendiaan, setBentukSediaan] = useState("");
  const [Produsen, setProdusen] = useState("");
  const [Harga, setHarga] = useState("");
  const [Stok, setStok] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const saveObat = async (e) => {
    e.preventDefault();
    if (!NamaObat || !NamaGenerik || !Dosis || !BentukSendiaan || !Produsen || !Harga || !Stok || !Deskripsi) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/obat", {
        NamaObat,
        NamaGenerik,
        Dosis,
        BentukSendiaan,
        Produsen,
        Harga,
        Stok,
        Deskripsi,
      });
      navigate("/obat");
    } catch (error) {
      console.error("There was an error saving the obat:", error);
      setError("There was an error saving the obat. Please try again.");
    }
  };

  const closeForm = () => {
    navigate("/obat"); // Navigate to medicines list when close icon is clicked
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half form-container">
        <div className="box">
        <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>TAMBAH OBAT</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={saveObat}>
            {error && <div className="notification is-danger">{error}</div>}
            <div className="field">
              <label className="label">Nama Obat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={NamaObat}
                  onChange={(e) => setNamaObat(e.target.value)}
                  placeholder="Nama Obat"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nama Generik</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={NamaGenerik}
                  onChange={(e) => setNamaGenerik(e.target.value)}
                  placeholder="Nama Generik"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Dosis</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Dosis}
                  onChange={(e) => setDosis(e.target.value)}
                  placeholder="Dosis"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Bentuk Sediaan</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={BentukSendiaan}
                  onChange={(e) => setBentukSediaan(e.target.value)}
                  placeholder="Bentuk Sediaan"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Produsen</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Produsen}
                  onChange={(e) => setProdusen(e.target.value)}
                  placeholder="Produsen"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Harga</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={Harga}
                  onChange={(e) => setHarga(e.target.value)}
                  placeholder="Harga"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Stok</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={Stok}
                  onChange={(e) => setStok(e.target.value)}
                  placeholder="Stok"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={Deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Deskripsi"
                  required
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddObat;
