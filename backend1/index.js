import express from "express";
import cors from "cors";
import ObatRoute from "./routes/ObatRouter.js";
import UsersRoute from "./routes/UsersRouter.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(ObatRoute);
app.use(UsersRoute);

app.listen(5000, ()=> console.log('Server up and running...'));