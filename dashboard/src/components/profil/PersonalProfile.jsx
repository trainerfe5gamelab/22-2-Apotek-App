import React from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './profil.css';

export default function PersonalProfile() {
  const navigate = useNavigate();
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
                      <h6 className="f-w-600-custom h6-custom">Hembo Tingor</h6>
                      <p className="p-custom">Web Designer</p>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block-custom">
                      <h6 className="m-b-20-custom p-b-5-custom b-b-default-custom f-w-600-custom">Information</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10-custom f-w-600-custom p-custom">Email</p>
                          <h6 className="text-muted-custom f-w-400">rntng@gmail.com</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10-custom f-w-600-custom p-custom">Phone</p>
                          <h6 className="text-muted-custom f-w-400">98979989898</h6>
                        </div>
                      </div>
                      <h6 className="m-b-20-custom m-t-40-custom p-b-5-custom b-b-default-custom f-w-600-custom">Projects</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10-custom f-w-600-custom p-custom">Recent</p>
                          <h6 className="text-muted-custom f-w-400">Sam Disuja</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10-custom f-w-600-custom p-custom">Most Viewed</p>
                          <h6 className="text-muted-custom f-w-400">Dinoter husainm</h6>
                        </div>
                      </div>
                      <ul className="social-link-custom">
                        <li>
                          <a href="#!" data-toggle="tooltip" data-placement="bottom" title="facebook" data-abc="true">
                            <i className="mdi mdi-facebook feather icon-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!" data-toggle="tooltip" data-placement="bottom" title="twitter" data-abc="true">
                            <i className="mdi mdi-twitter feather icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#!" data-toggle="tooltip" data-placement="bottom" title="instagram" data-abc="true">
                            <i className="mdi mdi-instagram feather icon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                      <button className="edit-profile-button"  onClick={() => navigate('/editprofile')}>Edit Profile</button>
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
