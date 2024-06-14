import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ObatList.css'; // Import the CSS file

const ObatList = () => {
  const [obat, setObat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getObat();
  }, []);

  const getObat = async () => {
    try {
      const response = await axios.get("http://localhost:5000/obat");
      console.log(response.data); // Tambahkan ini untuk melihat respons API
      setObat(response.data);
    } catch (error) {
      console.error("There was an error fetching the obat:", error);
    }
  };

  const deleteObat = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/obat/${id}`);
      getObat(); // Perbaiki pemanggilan fungsi untuk refresh data
    } catch (error) {
      console.log(error);
    }
  };

  const closeForm = () => {
    navigate("/"); // Navigate to home or other route when close icon is clicked
  };

  return (
    <div id="obat" className="columnss mt-5 is-centered">
      <div className="columns is-half">
        <div className="box">
          <h1 style={{ textAlign: 'center' }}><b>DATA DISPLAY OBAT</b></h1>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <button
            onClick={() => navigate('/addobat')}
            className="button is-success"
          >
            Add New
          </button>
          <div className="table-responsive">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Obat</th>
                  <th>Nama Generik</th>
                  <th>Dosis</th>
                  <th>Bentuk Sediaan</th>
                  <th>Produsen</th>
                  <th>Harga</th>
                  <th>Stok</th>
                  <th>Deskripsi</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {obat.map((obat, index) => (
                  <tr key={obat.id}>
                    <td>{index + 1}</td>
                    <td>{obat.NamaObat}</td>
                    <td>{obat.NamaGenerik}</td>
                    <td>{obat.Dosis}</td>
                    <td>{obat.BentukSendiaan}</td>
                    <td>{obat.Produsen}</td>
                    <td>{obat.Harga}</td>
                    <td>{obat.Stok}</td>
                    <td>{obat.Deskripsi}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/editobat/${obat.id}`)}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteObat(obat.id)}
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

export default ObatList;
