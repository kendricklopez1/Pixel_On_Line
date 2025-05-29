import express from "express";
import registerClientController from "../controllers/registesClientsController.js";

const router = express.Router();

//api/registerCLients
router.route("/").post(registerClientController.register)

//api/registerClients/verifyCodeEmail
router.route("/verifyCodeEmail").post(registerClientController.verifyCodeEmail)

export default router