import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './EditKustomer.css'; 

const EditUsers = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUsersById();
    }
  }, [id]);

  const updateUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        nama,
        email,
      });
      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setNama(response.data.nama);
      setEmail(response.data.email);
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Failed to fetch user data'); 
    }
  };  

  const closeForm = () => {
    navigate("/users"); 
  };

  return (
    <div className="columns edit mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <h3 className="edituser"style={{ textAlign: 'center', marginBottom: '5%' }}><b>EDIT USER</b></h3>
          <div className="close-icon" onClick={closeForm}>
            <i className="fas fa-times"></i>
          </div>
          <form onSubmit={updateUsers}>
            <div className="field">
              <label className="label">Nama</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama"
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
                  value={email}
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

export default EditUsers;
