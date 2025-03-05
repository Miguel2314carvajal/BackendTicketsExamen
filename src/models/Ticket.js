import {Schema, model} from 'mongoose'

const ticketSchema = new Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    id_tecnico: {
        type: Schema.Types.ObjectId,
        ref: 'Tecnico',
        required: true
    },
    id_cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},{
    timestamps: true
})

export default model('Ticket', ticketSchema)
