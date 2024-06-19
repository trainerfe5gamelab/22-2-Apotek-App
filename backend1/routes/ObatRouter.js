import express from "express";
import { getObat, getObatById, createObat, upateObat, deleteObat } from "../controllers/ObatController.js";

const router = express.Router();

router.get('/obat', getObat);
router.get('/obat/:id', getObatById);
router.post('/obat', createObat);
router.patch('/obat/:id', upateObat);
router.delete('/obat/:id', deleteObat);

export default router;