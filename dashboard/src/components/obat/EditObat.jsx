import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditObat.css'; 

const EditObat = () => {
  const [NamaObat, setNamaObat] = useState("");
  const [NamaGenerik, setNamaGenerik] = useState(""); 
  const [Dosis, setDosis] = useState("");
  const [BentukSendiaan, setBentukSediaan] = useState("");
  const [Produsen, setProdusen] = useState("");
  const [Harga, setHarga] = useState("");
  const [Stok, setStok] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getObatById();
    }
  }, [id]);

  const updateObat = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/obat/${id}`, {
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
      console.log(error);
    }
  };

  const getObatById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/obat/${id}`);
      setNamaObat(response.data.NamaObat);
      setNamaGenerik(response.data.NamaGenerik);
      setDosis(response.data.Dosis);
      setBentukSediaan(response.data.BentukSendiaan);
      setProdusen(response.data.Produsen);
      setHarga(response.data.Harga);
      setStok(response.data.Stok);
      setDeskripsi(response.data.Deskripsi);
    } catch (error) {
      console.error('Error fetching obat data:', error);
      alert('Failed to fetch obat data'); 
    }
  };  

  const closeForm = () => {
    navigate("/obat"); 
  };

  return (
    <div className="columns edit mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
        <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>EDIT OBAT</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={updateObat}>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditObat;