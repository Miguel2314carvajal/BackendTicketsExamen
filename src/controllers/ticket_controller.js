import Ticket from "../models/Ticket.js"
import Cliente from "../models/Cliente.js"
import Tecnico from "../models/Tecnico.js"

const listarTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find({ usuario: req.usuario._id })
            .populate('id_cliente', 'nombre apellido cedula')
            .populate('id_tecnico', 'nombre apellido')
        res.status(200).json(tickets)
    } catch (error) {
        res.status(500).json({ msg: "Error al listar los tickets" })
    }
}

const detalleTicket = async (req, res) => {
    const { id } = req.params
    try {
        const ticket = await Ticket.findOne({
            _id: id,
            usuario: req.usuario._id
        })
            .populate('id_cliente', 'nombre apellido cedula')
            .populate('id_tecnico', 'nombre apellido')
        if (!ticket)
            return res.status(404).json({ msg: "Ticket no encontrado" })
        res.status(200).json(ticket)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el ticket" })
    }
}

const registrarTicket = async (req, res) => {
    try {
       
        const cliente = await Cliente.findById(req.body.id_cliente)
        if (!cliente)
            return res.status(404).json({ msg: "Cliente no encontrado" })

        const tecnico = await Tecnico.findById(req.body.id_tecnico)
        if (!tecnico)
            return res.status(404).json({ msg: "Técnico no encontrado" })

        const ticket = new Ticket({
            ...req.body,
            usuario: req.usuario._id
        })
        await ticket.save()
        res.status(201).json({ msg: "Ticket registrado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar el ticket" })
    }
}

const actualizarTicket = async (req, res) => {
    const { id } = req.params
    try {
        const ticket = await Ticket.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!ticket)
            return res.status(404).json({ msg: "Ticket no encontrado" })

        if (req.body.id_cliente) {
            const cliente = await Cliente.findById(req.body.id_cliente)
            if (!cliente)
                return res.status(404).json({ msg: "Cliente no encontrado" })
        }

        if (req.body.id_tecnico) {
            const tecnico = await Tecnico.findById(req.body.id_tecnico)
            if (!tecnico)
                return res.status(404).json({ msg: "Técnico no encontrado" })
        }

        ticket.set(req.body)
        await ticket.save()
        res.status(200).json({ msg: "Ticket actualizado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el ticket" })
    }
}

const eliminarTicket = async (req, res) => {
    const { id } = req.params
    try {
        const ticket = await Ticket.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!ticket)
            return res.status(404).json({ msg: "Ticket no encontrado" })

        await ticket.deleteOne()
        res.status(200).json({ msg: "Ticket eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el ticket" })
    }
}

export {
    listarTickets,
    detalleTicket,
    registrarTicket,
    actualizarTicket,
    eliminarTicket
}
