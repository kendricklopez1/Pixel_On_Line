import express from  "express";
import suppliersController from "../controllers/suppliersController.js";
//Router() nos ayuda a colocar los metodo
//Que 
const router = express.Router();

router.route("/")
.get(suppliersController.getSuppliers)
.post(suppliersController.createSuppliers);

router.route("/:id")
.put(suppliersController.updateSuppliers)
.delete(suppliersController.deleteSuppliers);

export default router;