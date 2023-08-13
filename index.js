import express from 'express'
import dotenv from 'dotenv';
import {dbConnection }from './db/connection.js'
import cors from 'cors'
import crearModelos from './models/crearModelos.js'
import salaRouter from './routes/sala.js'

const app = express()
app.use(express.json())
dotenv.config()


dbConnection()
crearModelos()

 


 // Configurar CORS
 
const whiteList = [process.env.FRONTEND_URL];  

const corsOptions={
    origin:function(origin, callback){
     
        if(whiteList.includes(origin) || (!origin)){
            //Puede consultar la API
            callback(null,true);
        }else{
            //No esta permitido
            callback(new Error('Erorr de Cors'));
        }
    }
}   


app.use(cors(corsOptions))

const PORT = process.env.PORT || 4000;

app.use('/api/salas',salaRouter)
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})