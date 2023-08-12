import {Sequelize} from 'sequelize'

export const db = new Sequelize('Sala_Cines','root','carcamo10',{
    host:'localhost',
    dialect:'mysql',
    //logging:false
});

async function dbConnection(){
    try {
        await db.authenticate();
        //crearModelos()
        console.log('database online')
    } catch (error) {
        console.log(error)
    }
}

export default dbConnection