// File: ../api/register.js
import axios from "axios";

const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:6969/auth/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data; // Mengembalikan data dari response
  } catch (error) {
    if (error.response) {
      // Request dikirim tetapi server memberi respons dengan status diluar 2xx
      throw new Error(error.response.data.message || "Something went wrong");
    } else if (error.request) {
      // Request dikirim tetapi tidak ada respons
      throw new Error("No response received from server");
    } else {
      // Terjadi kesalahan saat membuat request
      throw new Error(error.message || "Something went wrong");
    }
  }
};

export default register;
