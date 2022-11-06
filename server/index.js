import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import savedRoutes from "./routes/saveds.routes.js";

const app = express();
mongoose
  .connect("mongodb://localhost/unit-conversor")
  .then(() => console.log("Conectado a BBDD"));

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(savedRoutes);
app.listen(PORT);

console.log(`server is runing on port ${PORT}`);
