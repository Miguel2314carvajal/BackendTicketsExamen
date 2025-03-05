import Cliente from "../models/Cliente.js"

const listarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find({ usuario: req.usuario._id })
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({ msg: "Error al listar los clientes" })
    }
}

const detalleCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Cliente.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!cliente)
            return res.status(404).json({ msg: "Cliente no encontrado" })
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el cliente" })
    }
}

const registrarCliente = async (req, res) => {
    try {
        const cliente = new Cliente({
            ...req.body,
            usuario: req.usuario._id
        })
        await cliente.save()
        res.status(201).json({ msg: "Cliente registrado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar el cliente" })
    }
}

const actualizarCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Cliente.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!cliente)
            return res.status(404).json({ msg: "Cliente no encontrado" })

        cliente.set(req.body)
        await cliente.save()
        res.status(200).json({ msg: "Cliente actualizado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el cliente" })
    }
}

const eliminarCliente = async (req, res) => {
    const { id } = req.params
    try {
        const cliente = await Cliente.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!cliente)
            return res.status(404).json({ msg: "Cliente no encontrado" })

        await cliente.deleteOne()
        res.status(200).json({ msg: "Cliente eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el cliente" })
    }
}

export {
    listarClientes,
    detalleCliente,
    registrarCliente,
    actualizarCliente,
    eliminarCliente
}
