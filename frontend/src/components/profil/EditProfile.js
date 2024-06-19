import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './EditProfile.css'; // Pastikan Anda memiliki file CSS untuk styling

export default function EditProfile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'Hembo Tingor',
    job: 'Web Designer',
    email: 'rntng@gmail.com',
    phone: '98979989898',
    recentProject: 'Sam Disuja',
    mostViewedProject: 'Dinoter husainm'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan perubahan profil di sini
    console.log('Profile updated:', profile);
    navigate('/profile'); // Kembali ke halaman profil setelah menyimpan
  };

  return (
    <div className="page-content-custom">
      <div className="padding-custom">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-10 col-md-12">
              <div className="card-custom user-card-full-custom">
                <MdClose className="icon-close-custom" onClick={() => navigate('/')}/>
                <div className="row m-0">
                  <div className="col-sm-4 bg-c-lite-green-custom user-profile-custom">
                    <div className="card-block-custom text-center">
                      <div className="m-b-25-custom">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius-custom"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 className="f-w-600-custom h6-custom">{profile.name}</h6>
                      <p className="p-custom">{profile.job}</p>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block-custom">
                      <form onSubmit={handleSubmit}>
                        <h6 className="m-b-20-custom p-b-5-custom b-b-default-custom f-w-600-custom">Edit Information</h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10-custom f-w-600-custom p-custom">Email</p>
                            <input
                              type="email"
                              name="email"
                              value={profile.email}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10-custom f-w-600-custom p-custom">Phone</p>
                            <input
                              type="text"
                              name="phone"
                              value={profile.phone}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <h6 className="m-b-20-custom m-t-40-custom p-b-5-custom b-b-default-custom f-w-600-custom">Projects</h6>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="m-b-10-custom f-w-600-custom p-custom">Recent</p>
                            <input
                              type="text"
                              name="recentProject"
                              value={profile.recentProject}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                          <div className="col-sm-6">
                            <p className="m-b-10-custom f-w-600-custom p-custom">Most Viewed</p>
                            <input
                              type="text"
                              name="mostViewedProject"
                              value={profile.mostViewedProject}
                              onChange={handleChange}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <button type="submit" className="save-profile-button">Save Profile</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
