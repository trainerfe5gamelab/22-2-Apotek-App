import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditKategori = () => {
  const [NamaKategori, setNamaKategori] = useState("");
  const [Deskripsi, setDeskripsi] = useState(""); 
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getKategoriById();
    }
  }, [id]);

  const updateKategori = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kategori/${id}`, {
        NamaKategori,
        Deskripsi,
      });
      navigate("/kategori");
    } catch (error) {
      console.log(error);
    }
  };

  const getKategoriById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/kategori/${id}`);
      setNamaKategori(response.data.NamaKategori);
      setDeskripsi(response.data.Deskripsi);
    } catch (error) {
      console.error('Error fetching kategori data:', error);
      alert('Failed to fetch kategori data'); 
    }
  };  

  const closeForm = () => {
    navigate("/kategori"); 
  };

  return (
    <div className="columns edit mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
        <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>EDIT KATEGORI</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={updateKategori}>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditKategori;
