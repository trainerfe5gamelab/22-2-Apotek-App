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
      console.log("Data obat yang diterima:", response.data); // Tambahkan ini untuk melihat respons API
      setObat(response.data);
    } catch (error) {
      console.error("There was an error fetching the obat:", error);
    }
  };

  const deleteObat = async (id) => {
    try {
      if (!id) {
        console.error("ID is undefined, cannot delete.");
        return;
      }
      console.log(`Menghapus obat dengan ID: ${id}`); // Logging untuk memastikan ID ada
      await axios.delete(`http://localhost:5000/obat/${id}`);
      getObat(); // Refresh data setelah delete
    } catch (error) {
      console.error("There was an error deleting the obat:", error);
    }
  };

  const closeForm = () => {
    navigate("/dashboard"); // Navigate to home or other route when close icon is clicked
  };

  const formatTanggal = (tanggal) => {
    const date = new Date(tanggal);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div id="obat" className="columns mt-5 is-centered">
      <div className="column is-half">
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
                  <th style={{ width: '5%' }}>No</th>
                  <th style={{ width: '20%' }}>Nama Obat</th>
                  <th style={{ width: '10%' }}>Harga</th>
                  <th style={{ width: '15%' }}>Gambar</th>
                  <th style={{ width: '30%' }}>Deskripsi</th>
                  <th style={{ width: '10%' }}>Tanggal Expired</th>
                  <th style={{ width: '10%' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {obat.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.namaObat}</td>
                    <td>{item.hargaObat}</td>
                    <td><img src={item.gambarObat} alt={item.namaObat} width="50" /></td>
                    <td>{item.deskripsiObat}</td>
                    <td>{formatTanggal(item.tgl_expired)}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/editobat/${item.id}`)}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          console.log(`Attempting to delete obat with ID: ${item.id}`);
                          deleteObat(item.id);
                        }}
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
