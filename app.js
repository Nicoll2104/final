import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from "mongoose";
import TipoProducto from './routes/tipo_producto.js';
import DisArea from './routes/distribucion_area.js';
import usuario from './routes/usuario.js';
import items from './routes/items_presupuesto.js';
import requerimiento from './routes/requerimiento.js';
/* import pedido from './routes/'; */

const app = express();
app.use(express.json())
app.use(cors());
app.use("/api/usuario", usuario)
app.use("/api/items", items)
/* app.use("/api/items", pedido) */
app.use("/api/tipoProducto", TipoProducto)
app.use("/api/disArea", DisArea)
app.use("/api/requerimiento", requerimiento)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
