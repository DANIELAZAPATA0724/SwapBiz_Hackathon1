import express from "express";
import cors from "cors";

import db from "./database/db.js";

import  v1CategoriesRouter  from './v1/routes/categoriesRouter.js';
import  v1ServiceRouter  from './v1/routes/serviceRouter.js';
import { PORT } from "./config.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/categories", v1CategoriesRouter);
app.use("/api/v1/services", v1ServiceRouter);

try {
  await db.authenticate();
  console.log("Conexión exitosa a la DB");
} catch (error) {
  console.log(`El error de conexión es: ${error}`);
}

app.listen(PORT, () => {
  console.log("Server UP running in http://localhost:3007/");
});

/* import express from 'express';
import  v1CategoriesRouter  from './v1/routes/categoriesRouter.js';
import  v1ServiceRouter  from './v1/routes/serviceRouter.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.json());
app.use("/api/v1/categories", v1CategoriesRouter);
app.use("/api/v1/services", v1ServiceRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); */