import express from "express";
import loginController from "../controllers/loginController.js";

// Crear el router para manejar la ruta de inicio de sesión
const router = express.Router();

// Ruta para login: procesa la solicitud de inicio de sesión
router.route("/")
    .post(loginController.login); // Iniciar sesión con los datos del usuario

// Exportación del router para usarlo en la app principal
export default router;
