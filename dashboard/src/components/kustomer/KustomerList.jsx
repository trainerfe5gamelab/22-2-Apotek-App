import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './KustomerList.css'; // Import the CSS file

const KustomerList = () => {
  const [kustomer, setKustomer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getKustomer();
  }, []);

  const getKustomer = async () => {
    try {
      const response = await axios.get("http://localhost:5000/kustomer");
      console.log(response.data); // Tambahkan ini untuk melihat respons API
      setKustomer(response.data);
    } catch (error) {
      console.error("There was an error fetching the kustomer:", error);
    }
  };

  const deleteKustomer = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/kustomer/${id}`);
      getKustomer(); // Perbaiki pemanggilan fungsi untuk refresh data
    } catch (error) {
      console.log(error);
    }
  };

  const closeForm = () => {
    navigate("/"); // Navigate to home or other route when close icon is clicked
  };

  return (
    <div id="kustomer" className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h1 style={{ textAlign: 'center' }}><b>DATA DISPLAY KUSTOMER</b></h1>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <button
            onClick={() => navigate('/addkustomer')}
            className="button is-success"
          >
            Add New
          </button>
          <div className="table-responsive">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Telepon</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {kustomer.map((kustomer, index) => (
                  <tr key={kustomer.id}>
                    <td>{index + 1}</td>
                    <td>{kustomer.Nama}</td>
                    <td>{kustomer.Alamat}</td>
                    <td>{kustomer.Telepon}</td>
                    <td>{kustomer.Email}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/editkustomer/${kustomer.id}`)}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteKustomer(kustomer.id)}
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

export default KustomerList;
