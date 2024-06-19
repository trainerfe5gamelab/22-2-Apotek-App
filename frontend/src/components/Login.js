import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [formError, setFormError] = useState({});

  const handleSignupClick = () => {
    navigate("/Register");
  };

  const validateForm = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch("http://localhost:6969/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Save JWT to localStorage or cookie
      localStorage.setItem("token", data.token);

      // Redirect or update UI as necessary
      // Example: navigate to the dashboard
      console.log("Login successful", data);

      handleClose();
    } catch (err) {
      setError(err.message);
      console.error("Login failed", err);
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <div className="form-container p-5 rounded position-relative">
        <FaTimes
          className="close-icon position-absolute top-0 end-0 m-3"
          size={24}
          onClick={handleClose}
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign In</h3>
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
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="input-group-text" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {formError.password && (
              <div className="text-danger">{formError.password}</div>
            )}
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label htmlFor="check" className="form-check-label ms-2">
              Remember Me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </div>
          {error && <div className="text-danger mt-2">{error}</div>}
          <p className="text-end mt-2">
            Belum Punya Akun?
            <button onClick={handleSignupClick} className="ms-2 btn btn-link">
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
