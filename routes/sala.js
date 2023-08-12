import { Router } from "express";
import { addUser,getUsers,deleteUser, addCantSillas, moverUser, editUser, recetSala } from "../controllers/sala.js";


const router = Router()

router.get('/',getUsers)
router.get('/:cant',addCantSillas)
router.delete('/:id',deleteUser)
router.post('/:id',moverUser)
router.put('/:id',editUser)
router.put('/',recetSala)
router.route('/').post(addUser)




export default router;