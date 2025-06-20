import express from "express";
import productsController from "../controllers/productsController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "public/" });

router.route("/")
    .get(productsController.getProducts)
    .post(upload.single("Image"), productsController.createProducts);

router.route("/:id")
    .put(upload.single("Image"), productsController.updateProducts)
    .delete(productsController.deleteProducts);

export default router;
