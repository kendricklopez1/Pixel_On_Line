import express from "express";
import cartsController from "../controllers/cartsController.js";

// Router nos permite definir rutas específicas para el recurso "carts"
const router = express.Router();

// Ruta principal: obtiene todos los carritos o crea uno nuevo
router.route("/")
    .get(cartsController.getCarts)      // Obtener todos los carritos
    .post(cartsController.createCarts) // Crear un nuevo carrito

// Ruta con ID: actualiza o elimina un carrito específico
router.route("/:id")
    .put(cartsController.updateCarts)   // Actualizar un carrito por ID
    .delete(cartsController.deleteCarts); // Eliminar un carrito por ID

// Exportación del router para usarlo en la app principal
export default router;
