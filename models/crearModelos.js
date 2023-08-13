
import Sala from "./sala.js";

const crearModelos=  async()=>{

    await Sala.sync().then(()=>{
        console.log('Modelo Usuarios Creado correctamente');
    }).catch((err) =>{
        console.log(err)
        console.log('Error al crear el modelo de Usuarios');
    })
  

}

export default crearModelos