import express from "express";
import clientsController from "../controllers/clientsController.js";

// Crear el router para manejar las rutas relacionadas con los clientes
const router = express.Router();

// Ruta principal: obtener todos los clientes o crear uno nuevo
router.route("/")
    .get(clientsController.getClients)         // Obtener todos los clientes
    .post(clientsController.createClient);     // Crear un nuevo cliente

// Ruta con ID: actualizar o eliminar un cliente específico
router.route("/:id")
    .put(clientsController.updateClient)       // Actualizar cliente por ID
    .delete(clientsController.deleteClient);   // Eliminar cliente por ID

// Exportación del router para usarlo en la app principal
export default router;
