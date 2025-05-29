import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import productsRoutes from "./src/routers/products.js";
import clientsRoutes from "./src/routers/clients.js";
import employeesRoutes from "./src/routers/employees.js";
import reviewsRoutes from "./src/routers/reviews.js";
import marksRoutes from "./src/routers/mark.js";
import modelsRoutes from "./src/routers/model.js";
import suppliersRoutes from "./src/routers/suppliers.js";
import cartsRoutes from "./src/routers/carts.js";
import salesRoutes from "./src/routers/sales.js";
import registerEmployeesRoutes from "./src/routers/registeremployees.js";
import loginRoutes from "./src/routers/login.js";
import logoutRoutes from "./src/routers/logout.js";
import registerClientsRoutes from "./src/routers/registerClients.js";
import recoveryPasswordRoutes from "./src/routers/recoveryPassword.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/products", productsRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/reviews", reviewsRoutes);
app.use("/api/mark", marksRoutes);
app.use("/api/models", modelsRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/carts", cartsRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/registerClients", registerClientsRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);

export default app;
