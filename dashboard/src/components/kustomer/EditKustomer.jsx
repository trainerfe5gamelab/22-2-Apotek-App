import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditKustomer.css'; 

const EditKustomer = () => {
  const [Nama, setNama] = useState("");
  const [Alamat, setAlamat] = useState(""); 
  const [Telepon, setTelepon] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getKustomerById();
    }
  }, [id]);

  const updateKustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kustomer/${id}`, {
        Nama,
        Alamat,
        Telepon,
        Email,
      });
      navigate("/kustomer");
    } catch (error) {
      console.log(error);
    }
  };

  const getKustomerById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/kustomer/${id}`);
      setNama(response.data.Nama);
      setAlamat(response.data.Alamat);
      setTelepon(response.data.Telepon);
      setEmail(response.data.Email);
    } catch (error) {
      console.error('Error fetching kustomer data:', error);
      alert('Failed to fetch kustomer data'); 
    }
  };  

  const closeForm = () => {
    navigate("/kustomer"); 
  };

  return (
    <div className="columns edit mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h3 style={{ textAlign: 'center', marginBottom: '5%' }}><b>EDIT KUSTOMER</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={updateKustomer}>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditKustomer;
