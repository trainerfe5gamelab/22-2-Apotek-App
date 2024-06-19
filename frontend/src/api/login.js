// src/services/login.js

import axios from "axios";

const BASE_URL = "http://localhost:6969"; // Ganti dengan URL backend Anda

/**
 * Fungsi untuk login pengguna.
 * @param {string} email - Nama pengguna
 * @param {string} password - Kata sandi pengguna
 * @returns {Promise} - Promise yang mengembalikan respons dari backend
 */
const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export default login;
