import {Sequelize} from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

export const db = new Sequelize('Sala_Cines',process.env.MYSQL_USER,process.env.MYSQL_PASS,{
    host:'localhost',
    dialect:'mysql',
    //logging:false
});

export async function dbConnection(){
    try {
        
        await db.authenticate();
        //crearModelos()
        console.log('database online')
    } catch (error) {
        console.log(error)
    }
}

