import express from 'express'
import dbConnection from './db/connection.js'
import cors from 'cors'
import crearModelos from './models/crearModelos.js'
import salaRouter from './routes/sala.js'

const app = express()
app.use(express.json())
 dbConnection()

 crearModelos()
 app.use(cors())
 app.use(express.json())

const PORT = 4000

app.use('/api/salas',salaRouter)
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})