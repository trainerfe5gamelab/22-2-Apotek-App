import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './InventoryList.css'; // Import the CSS file

const InventoryList = () => {
  const [inventory, setInventory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getInventory();
  }, []);

  const getInventory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/inventory");
      setInventory(response.data);
    } catch (error) {
      console.error("There was an error fetching the inventory:", error);
    }
  };

  const deleteInventory = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/inventory/${id}`);
      getInventory();
    } catch (error) {
      console.log(error);
    }
  };

  const closeForm = () => {
    navigate("/"); // Navigate to home or other route when close icon is clicked
  };

  return (
    <div id="inventory" className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
        <h1 style={{ textAlign: 'center' }}><b>INVENTORY</b></h1>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <button
            onClick={() => navigate('/addinventory')}
            className="button is-success"
          >
            Add New
          </button>
          <div className="table-responsive">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Obat ID</th>
                  <th>Jumlah</th>
                  <th>Tanggal Masuk</th>
                  <th>Tanggal Kadaluarsa</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, index) => (
                  <tr key={item.obatid}>
                    <td>{index + 1}</td>
                    <td>{item.ObatID}</td>
                    <td>{item.Jumlah}</td>
                    <td>{item.TanggalMasuk}</td>
                    <td>{item.TanggalKadaluarsa}</td>
                    <td>
                      <button
                        onClick={() => navigate(`/editinventory/${item.id}`)}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteInventory(item.id)}
                        className="button is-small is-danger mr-4"
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

export default InventoryList;
