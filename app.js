import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from "mongoose";

const app = express();
app.use(cors());


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
