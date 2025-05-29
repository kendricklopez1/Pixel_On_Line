// Objeto que contiene el controlador de logout
const logoutController = {};

// Función para cerrar sesión
logoutController.logout = async (req, res) => {
    // Elimina la cookie de autenticación
    res.clearCookie("authToken");

    // Respuesta indicando que la sesión se cerró correctamente
    return res.json({ message: "Session closed" });
};

// Exportación del controlador
export default logoutController;
