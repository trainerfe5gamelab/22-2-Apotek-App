import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './AddKustomer.css'; // Import the CSS file

const AddKustomer = () => {
  const [Nama, setNama] = useState("");
  const [Alamat, setAlamat] = useState("");
  const [Telepon, setTelepon] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const saveKustomer = async (e) => {
    e.preventDefault();
    if (!Nama || !Alamat || !Telepon || !Email) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/kustomer", {
        Nama,
        Alamat,
        Telepon,
        Email,
      });
      navigate("/kustomer");
    } catch (error) {
      console.error("There was an error saving the kustomer:", error);
      setError("There was an error saving the kustomer. Please try again.");
    }
  };

  const closeForm = () => {
    navigate("/kustomer"); // Navigate to persons list when close icon is clicked
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half form-container">
        <div className="box">
          <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>TAMBAH PERSON</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={saveKustomer}>
            {error && <div className="notification is-danger">{error}</div>}
            <div className="field">
              <label className="label">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Alamat"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Telepon</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={Telepon}
                  onChange={(e) => setTelepon(e.target.value)}
                  placeholder="Telepon"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="email"
                  className="input"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
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

export default AddKustomer;
