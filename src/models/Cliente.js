import {Schema, model} from 'mongoose'

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    ciudad: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    dependencia: {
        type: String,
        required: true,
        trim: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},{
    timestamps: true
})

export default model('Cliente', clienteSchema)
