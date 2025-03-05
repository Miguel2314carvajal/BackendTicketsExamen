import Tecnico from "../models/Tecnico.js"

const listarTecnicos = async (req, res) => {
    try {
        const tecnicos = await Tecnico.find({ usuario: req.usuario._id })
        res.status(200).json(tecnicos)
    } catch (error) {
        res.status(500).json({ msg: "Error al listar los técnicos" })
    }
}

const detalleTecnico = async (req, res) => {
    const { id } = req.params
    try {
        const tecnico = await Tecnico.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!tecnico)
            return res.status(404).json({ msg: "Técnico no encontrado" })
        res.status(200).json(tecnico)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el técnico" })
    }
}

const registrarTecnico = async (req, res) => {
    try {
        const tecnico = new Tecnico({
            ...req.body,
            usuario: req.usuario._id
        })
        await tecnico.save()
        res.status(201).json({ msg: "Técnico registrado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar el técnico" })
    }
}

const actualizarTecnico = async (req, res) => {
    const { id } = req.params
    try {
        const tecnico = await Tecnico.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!tecnico)
            return res.status(404).json({ msg: "Técnico no encontrado" })

        tecnico.set(req.body)
        await tecnico.save()
        res.status(200).json({ msg: "Técnico actualizado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el técnico" })
    }
}

const eliminarTecnico = async (req, res) => {
    const { id } = req.params
    try {
        const tecnico = await Tecnico.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!tecnico)
            return res.status(404).json({ msg: "Técnico no encontrado" })

        await tecnico.deleteOne()
        res.status(200).json({ msg: "Técnico eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el técnico" })
    }
}

export {
    listarTecnicos,
    detalleTecnico,
    registrarTecnico,
    actualizarTecnico,
    eliminarTecnico
}
