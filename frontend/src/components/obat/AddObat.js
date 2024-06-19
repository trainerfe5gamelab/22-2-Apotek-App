import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddObat.css'; // Import the CSS file

const AddObat = () => {
  const [namaObat, setNamaObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [gambarObat, setGambarObat] = useState("");
  const [deskripsiObat, setDeskripsiObat] = useState("");
  const [tgl_expired, setTglExpired] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const saveObat = async (e) => {
    e.preventDefault();
    if (!namaObat || !hargaObat || !gambarObat || !deskripsiObat || !tgl_expired) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/obat", {
        namaObat,
        hargaObat,
        gambarObat,
        deskripsiObat,
        tgl_expired
      });
      console.log("Response from server:", response.data);
      navigate("/obat");
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.data.message || "An error occurred while saving the data."}`);
      } else if (error.request) {
        console.log("Request data:", error.request);
        setError("No response received from the server. Please try again.");
      } else {
        console.log("Error message:", error.message);
        setError("An error occurred while setting up the request. Please try again.");
      }
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
                  value={namaObat}
                  onChange={(e) => setNamaObat(e.target.value)}
                  placeholder="Nama Obat"
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
                  value={hargaObat}
                  onChange={(e) => setHargaObat(e.target.value)}
                  placeholder="Harga"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gambar</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={gambarObat}
                  onChange={(e) => setGambarObat(e.target.value)}
                  placeholder="URL Gambar"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={deskripsiObat}
                  onChange={(e) => setDeskripsiObat(e.target.value)}
                  placeholder="Deskripsi"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Expired</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={tgl_expired}
                  onChange={(e) => setTglExpired(e.target.value)}
                  placeholder="Tanggal Expired"
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
