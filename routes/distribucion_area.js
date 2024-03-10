import { Router } from "express";
import { check } from "express-validator";
import { validarcampos } from "../middlewares/validarcampos.js";
import httpDistribucionArea from "../controllers/distribucion_area.js";

const router = Router();

router.get("/ver", httpDistribucionArea.getItem);

router.get("/item/:id",[
    check("id", "El id es obligatorio").not().isEmpty(),
    validarcampos
], httpDistribucionArea.getItemid);

router.post("/agregar",[
    check("codigo_auxiliar","El codigo auxiliar es obligatorio").not().isEmpty(),
    check("valor_presupuesto", "El valor presupuesto es obligatorio").not().isEmpty(),
    check("distribucion_red", 'La distribucion de red es obligatoria').not().isEmpty(),
    check("area_tematica", "El area tematica es obligatoria").not().isEmpty(),
    validarcampos
], httpDistribucionArea.postItem);

router.put("/modificar/:id",[
    check("codigo_auxiliar","El codigo auxiliar es obligatorio").not().isEmpty(),
    check("valor_presupuesto", "El valor presupuesto es obligatorio").not().isEmpty(),
    check("distribucion_red", 'La distribucion de red es obligatoria').not().isEmpty(),
    check("area_tematica", "El area tematica es obligatoria").not().isEmpty(),
    validarcampos
], httpDistribucionArea.putItem);

router.put("/inactivar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httpDistribucionArea.putInactivar);

router.put("/activar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httpDistribucionArea.putactivar);

router.delete("/eliminar/:id",[
    check("id", "Digite ID").not().isEmpty(),
    validarcampos
], httpDistribucionArea.deleteItem);

export default router;