import { Router } from "express";
import { check } from "express-validator";
import { validarcampos } from "../middlewares/validarcampos.js";
import httprequerimiento from "../controllers/requerimiento.js";

const router = Router();

router.get("/ver", httprequerimiento.getRequerimiento);

router.get("/requerimiento/:id",[
    check("id", "El id es obligatorio").not().isEmpty(),
    validarcampos
], httprequerimiento.getRequerimientoid);

router.post("/agregar",[
    check("codigo_presupuesto","El codigo_presupuesto es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('presupuesto_inicial', 'El presupuesto_inicial es obligatorio').not().isEmpty(),
    check("año", "El año  es obligatorio").not().isEmpty(),
    validarcampos
], httprequerimiento.postRequerimiento);

router.put("/modificar/:id",[
    check("codigo_presupuesto","El codigo_presupuesto es obligatorio").not().isEmpty(),
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check('presupuesto_inicial', 'El presupuesto_inicial es obligatorio').not().isEmpty(),
    check("año", "El año  es obligatorio").not().isEmpty(),
    validarcampos
], httprequerimiento.putRequerimiento);

router.put("/inactivar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httprequerimiento.putInactivar);

router.put("/activar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httprequerimiento.putactivar);

router.delete("/eliminar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httprequerimiento.deleteRequerimiento);

export default router;