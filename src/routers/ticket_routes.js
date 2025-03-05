import { Router } from 'express'
import {
    listarTickets,
    detalleTicket,
    registrarTicket,
    actualizarTicket,
    eliminarTicket
} from "../controllers/ticket_controller.js"
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

router.use(verificarAutenticacion) 

router.get("/tickets", listarTickets)
router.get("/ticket/:id", detalleTicket)
router.post("/ticket", registrarTicket)
router.put("/ticket/:id", actualizarTicket)
router.delete("/ticket/:id", eliminarTicket)

export default router
