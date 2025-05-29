import express from 'express';
import registerEmployeesController from '../controllers/registerEmployeesController.js';

// Crear el router para manejar el registro de empleados
const router = express.Router();

// Ruta para registrar un nuevo empleado
router.route("/")
    .post(registerEmployeesController.register); // Registrar un empleado

// Exportación del router para usarlo en la app principal
export default router;
