import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profil.css'

function ProfileCard() {
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "..",
    email: "..",
    phone: "..",
    mobile: "..",
    address: "..",
    imageUrl: "https://via.placeholder.com/150"
  });

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [id]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfile(prevProfile => ({
          ...prevProfile,
          imageUrl: event.target.result
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* First Card: Display Profile Information */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="profile-image">
                <img src={profile.imageUrl} alt="Profile Picture" style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} />
              </div>
              <div className="profile-info">
                <h2>{profile.fullName}</h2>
                <p>{profile.email}</p>
              </div>
              <button className="btn btn-danger mt-3" onClick={() => navigate('/')}>Logout</button>
            </div>
          </div>
        </div>

        {/* Second Card: Edit Profile Information */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="profile-details">
                <div className="detail-item">
                  <label htmlFor="fullName">Full Name:</label>
                  {showEdit ? (
                    <input 
                      type="text" 
                      id="fullName" 
                      value={profile.fullName} 
                      onChange={handleChange} 
                      className="form-control" 
                    />
                  ) : (
                    <span className="form-control-static">{profile.fullName}</span>
                  )}
                </div>
                <div className="detail-item">
                  <label htmlFor="email">Email:</label>
                  {showEdit ? (
                    <input 
                      type="email" 
                      id="email" 
                      value={profile.email} 
                      onChange={handleChange} 
                      className="form-control" 
                    />
                  ) : (
                    <span className="form-control-static">{profile.email}</span>
                  )}
                </div>
                <div className="detail-item">
                  <label htmlFor="phone">Phone:</label>
                  {showEdit ? (
                    <input 
                      type="tel" 
                      id="phone" 
                      value={profile.phone} 
                      onChange={handleChange} 
                      className="form-control" 
                    />
                  ) : (
                    <span className="form-control-static">{profile.phone}</span>
                  )}
                </div>
                <div className="detail-item">
                  <label htmlFor="mobile">Mobile:</label>
                  {showEdit ? (
                    <input 
                      type="tel" 
                      id="mobile" 
                      value={profile.mobile} 
                      onChange={handleChange} 
                      className="form-control" 
                    />
                  ) : (
                    <span className="form-control-static">{profile.mobile}</span>
                  )}
                </div>
                <div className="detail-item">
                  <label htmlFor="address">Address:</label>
                  {showEdit ? (
                    <input 
                      type="text" 
                      id="address" 
                      value={profile.address} 
                      onChange={handleChange} 
                      className="form-control" 
                    />
                  ) : (
                    <span className="form-control-static">{profile.address}</span>
                  )}
                </div>
                {showEdit && (
                  <div className="detail-item">
                    <label htmlFor="profileImage">Profile Image:</label>
                    <input 
                      type="file" 
                      id="profileImage" 
                      onChange={handleImageChange} 
                      className="form-control" 
                    />
                  </div>
                )}
                <button className="btn btn-primary edit-button" onClick={handleEdit}>
                  {showEdit ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
