import { Router } from 'express'
import {
    listarClientes,
    detalleCliente,
    registrarCliente,
    actualizarCliente,
    eliminarCliente
} from "../controllers/cliente_controller.js"
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

router.use(verificarAutenticacion) 

router.get("/clientes", listarClientes)
router.get("/cliente/:id", detalleCliente)
router.post("/cliente", registrarCliente)
router.put("/cliente/:id", actualizarCliente)
router.delete("/cliente/:id", eliminarCliente)

export default router
