import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const AddKategori = () => {
  const [NamaKategori, setNamaKategori] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const saveKategori = async (e) => {
    e.preventDefault();
    if (!NamaKategori || !Deskripsi) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/kategori", {
        NamaKategori,
        Deskripsi,
      });
      navigate("/kategori");
    } catch (error) {
      console.error("There was an error saving the kategori:", error);
      setError("There was an error saving the kategori. Please try again.");
    }
  };

  const closeForm = () => {
    navigate("/kategori"); // Navigate to categories list when close icon is clicked
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half form-container">
        <div className="box">
        <h3 style={{ textAlign: 'center' }}><b>TAMBAH KATEGORI</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={saveKategori}>
            {error && <div className="notification is-danger">{error}</div>}
            <div className="field">
              <label className="label">Nama Kategori</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={NamaKategori}
                  onChange={(e) => setNamaKategori(e.target.value)}
                  placeholder="Nama Kategori"
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

export default AddKategori;
