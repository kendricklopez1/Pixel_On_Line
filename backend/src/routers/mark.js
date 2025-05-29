import express from "express";
import markController from "../controllers/markController.js";

// Crear el router para manejar las rutas relacionadas con las marcas
const router = express.Router();

// Ruta principal: obtener todas las marcas o crear una nueva
router.route("/")
    .get(markController.getMark)         // Obtener todas las marcas
    .post(markController.createMark);    // Crear una nueva marca

// Ruta con ID: actualizar o eliminar una marca específica
router.route("/:id")
    .put(markController.updateMark)      // Actualizar marca por ID
    .delete(markController.deleteMark);  // Eliminar marca por ID

// Exportación del router para usarlo en la app principal
export default router;
