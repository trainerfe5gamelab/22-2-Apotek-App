import express from "express";
import { getUsers, getUsersById, createUsers, upateUsers, deleteUsers } from "../controllers/UsersController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.patch('/users/:id', upateUsers);
router.delete('/users/:id', deleteUsers);

export default router;