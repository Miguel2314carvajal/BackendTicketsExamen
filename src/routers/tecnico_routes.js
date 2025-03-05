import { Router } from 'express'
import {
    listarTecnicos,
    detalleTecnico,
    registrarTecnico,
    actualizarTecnico,
    eliminarTecnico
} from "../controllers/tecnico_controller.js"
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

router.use(verificarAutenticacion) 

router.get("/tecnicos", listarTecnicos)
router.get("/tecnico/:id", detalleTecnico)
router.post("/tecnico", registrarTecnico)
router.put("/tecnico/:id", actualizarTecnico)
router.delete("/tecnico/:id", eliminarTecnico)

export default router
