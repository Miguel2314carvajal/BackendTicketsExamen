import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

import routerUsuarios from './routers/usuario_routes.js'
import routerClientes from './routers/cliente_routes.js'
import routerTecnicos from './routers/tecnico_routes.js'
import routerTickets from './routers/ticket_routes.js'

const app = express()
dotenv.config()


app.use(express.json())
app.use(cors())  


app.set('port', process.env.PORT || 3000)


app.use('/', routerUsuarios)
app.use('/', routerClientes)
app.use('/', routerTecnicos)
app.use('/', routerTickets)


app.get('/', (req, res) => {
    res.json({ msg: 'API funcionando' })
})

app.use((req,res)=>res.status(404).json({msg: "Endpoint no encontrado"}))


export default  app