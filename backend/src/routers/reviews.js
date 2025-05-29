import express from "express";
import reviewController from "../controllers/reviewController.js";

// Crear el router para manejar las rutas relacionadas con reseñas (reviews)
const router = express.Router();

// Ruta principal: obtener todas las reseñas o crear una nueva
router.route("/")
    .get(reviewController.getReviews)         // Obtener todas las reseñas
    .post(reviewController.createReviews);    // Crear una nueva reseña

// Ruta con ID: actualizar o eliminar una reseña específica
router.route("/:id")
    .put(reviewController.updateReviews)      // Actualizar reseña por ID
    .delete(reviewController.deleteReviews);  // Eliminar reseña por ID

// Exportación del router para usarlo en la app principal
export default router;
