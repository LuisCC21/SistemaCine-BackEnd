import Sala from "../models/sala.js";

const addCantSillas =async (req,res)=>{
    const {cant} = req.params
   
    const array = new Array(Number(cant)).fill("")


    try {
        
        const sala = Sala.build({asientos:array});
        await sala.save()
        res.json({
            array
        })
    } catch (error) {
        console.log(error)
        
    }

}


const addUser = async(req, res)=>{

    const {salaActualizada}=req.body
    try {
        const Users = await Sala.findByPk(1);

        if(!Users){
            const sala = Sala.build(body);
            await sala.save()
    
            res.status(400).json({
                msg:'Error al agregar usuario'
            })
        }

        const sala= await Sala.update({ asientos: salaActualizada }, {
            where: {
             id: 1
            }
          });

          res.json({
            sala
        })

       
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg:'Error al guardar la sala'
        })
    }
  
}

const deleteUser = async(req, res)=>{
    const{id} = req.params
    


    try {
        const Users = await Sala.findByPk(1);

        if(!Users){
            return res.status(400).json({
                msg:"Error al eliminar"
            })
        }

       const arrayUpdated = Users.asientos.map((silla, i) =>{
            if(i == id){
                return ""
            }
            return silla
       })

       await Sala.update({asientos:arrayUpdated},{
        where:{
            id:1
        }
       })

        res.json({
           msg:"Eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
    }
}
const moverUser = async(req, res,next)=>{
    const{id} = req.params
    const {name} = req.body

    try {
        const Users = await Sala.findByPk(1);

        if(!Users){
            return res.status(400).json({
                msg:"Error al mover"
            })
        }

       const arrayUpdated = Users.asientos.map((silla, i) =>{
            if(i == id){
                return name
            }
            return silla
       })

       await Sala.update({asientos:arrayUpdated},{
        where:{
            id:1
        }
       })



        res.json({
           msg:"Actualizado correctamente"
        })
    } catch (error) {
        console.log(error)
    }
}

const editUser = async(req, res)=>{
    const{id} = req.params
    const {name} = req.body


    try {
        const Users = await Sala.findByPk(1);

        if(!Users){
            return res.status(400).json({
                msg:"Error al editar"
            })
        }

       const arrayUpdated = Users.asientos.map((silla, i) =>{
            if(i == id){
                return name
            }
            return silla
       })

       await Sala.update({asientos:arrayUpdated},{
        where:{
            id:1
        }
       })



        res.json({
           msg:"Actualizado correctamente"
        })
    } catch (error) {
        console.log(error)
    }
}

const getUsers = async(req, res)=>{
    try {
        const Users = await Sala.findByPk(1);

        if(!Users){
            return 
        }

        res.json({
           Users
        })
    } catch (error) {
        console.log(error)
    }
}


const recetSala = async(req, res)=>{
    try {
       
        const sala = await Sala.findByPk(1);

        if(!sala){
            return res.status(400).json({
                msg:"Error al recetear"
            })
        }


        await Sala.update({asientos:[]},{
            where:{
                id:1
            }
           })
    

        res.json({
           msg:'Receteado correctamente'
        })
    } catch (error) {
        console.log(error)
    }
}



export {
    addUser,
    deleteUser,
    getUsers,
    addCantSillas,
    moverUser,
    editUser,
    recetSala
}