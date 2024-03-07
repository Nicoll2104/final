import { Router } from "express";
import { check } from "express-validator";
import httpPedido from "../controllers/pedido.js";
import { validarcampos } from "../middlewares/validarcampos.js";

const router = Router();

router.get("/ver", httpPedido.getPedido);

router.get("/pedido/:id", httpPedido.getPedidoid);

router.post("/agregar",[
    check("fecha_creacion","La fecha de creacion es obligatorio").not().isEmpty(),
    check("fecha_entrega","La fecha de entrga es obligatorio").not().isEmpty(),
    check("")
])