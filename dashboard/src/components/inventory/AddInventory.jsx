import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddInventory.css'; // Import the CSS file

const AddInventory = () => {
  const [ObatID, setObatId] = useState("");
  const [Jumlah, setJumlah] = useState("");
  const [TanggalMasuk, setTanggalMasuk] = useState("");
  const [TanggalKadaluarsa, setTanggalKadaluarsa] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const saveInventory = async (e) => {
    e.preventDefault();
    if (!ObatID || !Jumlah || !TanggalMasuk || !TanggalKadaluarsa) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/inventory", {
        ObatID,
        Jumlah,
        TanggalMasuk,
        TanggalKadaluarsa,
      });
      navigate("/inventory");
    } catch (error) {
      console.error("There was an error saving the inventory:", error);
      setError("There was an error saving the inventory. Please try again.");
    }
  };

  const closeForm = () => {
    navigate("/inventory"); // Navigate to medicines list when close icon is clicked
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half form-container">
        <div className="box">
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>TAMBAH INVENTORY</b></h3>
          <form onSubmit={saveInventory}>
            {error && <div className="notification is-danger">{error}</div>}
            <div className="field">
              <label className="label">Obat ID</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={ObatID}
                  onChange={(e) => setObatId(e.target.value)}
                  placeholder="Obat ID"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Jumlah</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={Jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                  placeholder="Jumlah"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Masuk</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={TanggalMasuk}
                  onChange={(e) => setTanggalMasuk(e.target.value)}
                  placeholder="Tanggal Masuk"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Tanggal Kadaluarsa</label>
              <div className="control">
                <input
                  type="date"
                  className="input"
                  value={TanggalKadaluarsa}
                  onChange={(e) => setTanggalKadaluarsa(e.target.value)}
                  placeholder="Tanggal Kadaluarsa"
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

export default AddInventory;
