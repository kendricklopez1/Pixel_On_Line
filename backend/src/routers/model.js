// Importa el módulo 'express' y crea un enrutador utilizando Router()
import express from "express";
const router = express.Router();

// Importa el controlador que contiene la lógica para manejar las rutas de "Modelos"
import modelsController from "../controllers/modelsController.js";

// Define las rutas para "/api/models" (ruta raíz)
// GET => Obtener todos los modelos
// POST => Crear un nuevo modelo
router.route("/")
  .get(modelsController.getModels)        // Llama a la función getModels del controlador
  .post(modelsController.createModels);   // Llama a la función createModels del controlador

// Define las rutas para "/api/models/:id" (ruta con parámetro ID específico)
// GET => Obtener un modelo por su ID
// PUT => Actualizar un modelo por su ID
// DELETE => Eliminar un modelo por su ID
router.route("/:id")         // Llama a la función getModel del controlador
  .put(modelsController.updateModels)     // Llama a la función updateModels del controlador
  .delete(modelsController.deleteModels); // Llama a la función deleteModels del controlador

// Exporta el enrutador para que pueda ser usado en el archivo principal del servidor (por ejemplo, en app.js)
export default router;
