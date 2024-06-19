import express from "express";
import bodyParser from "body-parser";
import auth from "../backend/routes/auth.js";
import obat from "./routes/obat.js";
import cors from "cors";

const app = express();
app.use(cors());
// app.use(express.json());

app.use(bodyParser.json());
app.use("/auth", auth);
app.use("/obat", obat);

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
