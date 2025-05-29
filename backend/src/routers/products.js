import express from "express";
import productsController from "../controllers/productsController.js";

// Crear el router para manejar las rutas relacionadas con los productos
const router = express.Router();

// Ruta principal: obtener todos los productos o crear uno nuevo
router.route("/")
    .get(productsController.getProducts)         // Obtener todos los productos
    .post(productsController.createProducts);    // Crear un nuevo producto

// Ruta con ID: actualizar o eliminar un producto específico
router.route("/:id")
    .put(productsController.updateProducts)      // Actualizar producto por ID
    .delete(productsController.deleteProducts);  // Eliminar producto por ID

// Exportación del router para usarlo en la app principal
export default router;
