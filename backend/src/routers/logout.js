import express from "express";
import logoutController from "../controllers/logoutController.js";

// Crear el router para manejar la ruta de cierre de sesión
const router = express.Router();

// Ruta para logout: elimina la cookie de autenticación y cierra la sesión
router.route("/")
    .post(logoutController.logout); // Cerrar sesión del usuario

// Exportación del router para usarlo en la app principal
export default router;
