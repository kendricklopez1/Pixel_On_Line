import express from "express";
import employeesController from "../controllers/employeesController.js";

// Crear el router para manejar las rutas relacionadas con los empleados
const router = express.Router();

// Ruta principal: obtener todos los empleados o crear uno nuevo
router.route("/")
    .get(employeesController.getEmployees)           // Obtener todos los empleados
    .post(employeesController.createEmployee);       // Crear un nuevo empleado

// Ruta con ID: actualizar o eliminar un empleado específico
router.route("/:id")
    .put(employeesController.updateEmployee)         // Actualizar empleado por ID
    .delete(employeesController.deleteEmployee);     // Eliminar empleado por ID

// Exportación del router para usarlo en la app principal
export default router;
