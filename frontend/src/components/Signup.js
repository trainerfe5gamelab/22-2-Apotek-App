import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./Signup.css";
import register from "../api/register";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Username is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSigninClick = () => {
    navigate("/Signin");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const userData = { name, email, password };
      const data = await register(userData);

      // Handle successful registration
      console.log("Registration successful", data);

      // Navigate to login page after successful registration
      navigate("/signin");
    } catch (err) {
      setError(err.message);
      console.error("Registration failed", err);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center">
      <div className="form-container p-5 rounded bg-white position-relative">
        <FaTimes
          className="close-icon position-absolute top-0 end-0 m-3"
          size={24}
          onClick={handleClose}
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-3">
            <label htmlFor="fname">
              UserName <span className="required">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="text"
                placeholder="Enter username"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {formError.name && (
              <div className="text-danger">{formError.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill"></i>
              </span>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {formError.email && (
              <div className="text-danger">{formError.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {formError.password && (
              <div className="text-danger">{formError.password}</div>
            )}
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Sign Up
            </button>
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}
          <p className="text-end mt-2">
            Already Registered?{" "}
            <button onClick={handleSigninClick} className="ms-2 btn btn-link">
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
