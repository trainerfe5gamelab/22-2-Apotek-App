import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditObat.css'; 

const EditObat = () => {
  const [namaObat, setNamaObat] = useState("");
  const [hargaObat, setHargaObat] = useState("");
  const [gambarObat, setGambarObat] = useState(""); 
  const [deskripsiObat, setDeskripsiObat] = useState("");
  const [tgl_expired, setTglExpired] = useState("");
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
        namaObat,
        hargaObat,
        gambarObat,
        deskripsiObat,
        tgl_expired,
      });
      navigate("/obat");
    } catch (error) {
      console.log(error);
    }
  };

  const getObatById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/obat/${id}`);
      setNamaObat(response.data.namaObat);
      setHargaObat(response.data.hargaObat);
      setGambarObat(response.data.gambarObat);
      setDeskripsiObat(response.data.deskripsiObat);
      setTglExpired(response.data.tgl_expired);
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
                  value={namaObat}
                  onChange={(e) => setNamaObat(e.target.value)}
                  placeholder="Nama Obat"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Harga Obat</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={hargaObat}
                  onChange={(e) => setHargaObat(e.target.value)}
                  placeholder="Harga Obat"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Gambar Obat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={gambarObat}
                  onChange={(e) => setGambarObat(e.target.value)}
                  placeholder="URL Gambar Obat"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Deskripsi Obat</label>
              <div className="control">
                <textarea
                  className="textarea"
                  value={deskripsiObat}
                  onChange={(e) => setDeskripsiObat(e.target.value)}
                  placeholder="Deskripsi Obat"
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
