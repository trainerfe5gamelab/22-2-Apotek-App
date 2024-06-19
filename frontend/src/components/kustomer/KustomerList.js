import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './KustomerList.css'; // Import the CSS file

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      console.log(response.data); // Tambahkan ini untuk melihat respons API
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error fetching the kustomer:", error);
    }
  };

  const deleteUsers = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers(); // Perbaiki pemanggilan fungsi untuk refresh data
    } catch (error) {
      console.log(error);
    }
  };

  const closeForm = () => {
    navigate("/dashboard"); // Navigate to home or other route when close icon is clicked
  };

  return (
    <div id="kustomer" className="columns mt-5 is-centered">
      <div className="column is-half">
        <div className="box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ textAlign: 'center', flexGrow: 1 }}><b>DATA DISPLAY KUSTOMER</b></h1>
            <div className="close-icon" onClick={closeForm}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <button
            onClick={() => navigate('/addusers')}
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
                  <th>Email</th>
                  <th>Password</th> {/* Add a password header */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.nama}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td> {/* Display the password */}
                    <td>
                      <button
                        onClick={() => navigate(`/editusers/${user.id}`)}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteUsers(user.id)}
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

export default UsersList;
