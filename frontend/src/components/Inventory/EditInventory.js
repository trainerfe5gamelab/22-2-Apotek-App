import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditInventory.css'; 

const EditInventory = () => {
  const [ObatID, setObatId] = useState("");
  const [Jumlah, setJumlah] = useState(""); 
  const [TanggalMasuk, setTanggalMasuk] = useState("");
  const [TanggalKadaluarsa, setTanggalKadaluarsa] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getInventoryById();
    }
  }, [id]);

  const updateInventory = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/inventory/${id}`, {
        ObatID,
        Jumlah,
        TanggalMasuk,
        TanggalKadaluarsa,
      });
      navigate("/inventory");
    } catch (error) {
      console.error("There was an error updating the inventory:", error);
      alert("There was an error updating the inventory. Please try again.");
    }
  };

  const getInventoryById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/inventory/${id}`);
      setObatId(response.data.ObatID);
      setJumlah(response.data.Jumlah);
      setTanggalMasuk(response.data.TanggalMasuk);
      setTanggalKadaluarsa(response.data.TanggalKadaluarsa);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
      alert('Failed to fetch inventory data');
    }
  };  

  const closeForm = () => {
    navigate("/inventory"); 
  };

  return (
    <div className="columns edit mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>EDIT INVENTORY</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={updateInventory}>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditInventory;
