import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import the CSS file

const KategoriList = () => {
  const [kategori, setKategori] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kategori");
      setKategori(response.data);
    } catch (error) {
      console.error("There was an error fetching the kategori:", error);
    }
  };

  const deleteKategori = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kategori/${id}`);
      getKategori(); // Corrected function call to refresh data
    } catch (error) {
      console.log(error);
    }
  };

  const closeForm = () => {
    navigate("/"); 
  };

  return (
    <div id="kategori" className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 style={{ textAlign: 'center' }}><b>KATEGORI OBAT</b></h1>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <button
            onClick={() => navigate('/addkategori')}
            className="button is-success"
          >
            Add New
          </button>
          <div className="table-responsive">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kategori</th>
                  <th>Deskripsi</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {kategori.map((kategori, index) => (
                  <tr key={kategori.id}>
                    <td>{index + 1}</td>
                    <td>{kategori.NamaKategori}</td>
                    <td>{kategori.Deskripsi}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/editkategori/${kategori.id}`)}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteKategori(kategori.id)}
                        className="button is-small is-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KategoriList;
