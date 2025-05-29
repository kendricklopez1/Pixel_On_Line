// Importación de modelos de clientes y empleados
import clientsModel from "../models/Clients.js";
import empleoyeesModel from "../models/Employees.js";

// Importación de utilidades para encriptación y tokens
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

// Configuración general (como claves secretas)
import { config } from "../../config.js";

// Objeto que contiene el controlador de login
const loginController = {};

// Función principal de login
loginController.login = async (req, res) => {
    const { emailEmployees, password } = req.body;

    try {
        let userFound;
        let userType;

        // Verificación si es el admin (datos sacados de la config)
        if (emailEmployees === config.ADMIN.email && password === config.ADMIN.password) {
            userType = "admin";
            userFound = { _id: "admin" }; // Representación simple del admin
        } else {
            // Buscar si el correo pertenece a un empleado
            userFound = await empleoyeesModel.findOne({ emailEmployees });
            userType = "empleoyee";

            // Si no es empleado, se busca como cliente
            if (!userFound) {
                userFound = await clientsModel.findOne({ emailEmployees });
                userType = "Clients";
            }
        }

        // Si no se encuentra ningún usuario
        if (!userFound) {
            return res.json({ message: "User not found" });
        }

        // Verificación de contraseña si no es admin
        if (userType !== "admin") {
            const isMatch = await bcrypt.compare(password, userFound.password);
            if (!isMatch) {
                return res.json({ message: "Invalid password" });
            }
        }

        // Generación del token JWT y envío por cookie
        jsonwebtoken.sign(
            { id: userFound._id, userType }, // Datos a guardar en el token
            config.JWT.secret,               // Clave secreta
            { expiresIn: config.JWT.expiresIn }, // Tiempo de expiración

            (error, token) => {
                if (error) console.log("error" + error);
                res.cookie("authCookie", token);
                res.json({ message: "Login sucessful" });
            }
        );

    } catch (error) {
        // Manejo de errores generales
        console.log("error" + error);
    }
};

// Exportación del controlador
export default loginController;
