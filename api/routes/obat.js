// File: routes/obat.js

import express from "express";
const router = express.Router();
import db from "../config/db.js";

// Endpoint untuk mendapatkan semua data obat dari database
router.get("/", (req, res) => {
  const sql = "SELECT * FROM obat"; // Sesuaikan dengan nama tabel obat di database Anda
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching medicines from database:", err);
      res.status(500).json({ message: "Failed to fetch medicines" });
      return;
    }
    res.json(results); // Mengirimkan data obat dalam format JSON
  });
});

export default router;
