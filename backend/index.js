import dotenv from "dotenv";
dotenv.config(); // 🟢 Esto debe ir primero

import app from "./app.js";
import "./database.js";
import { config } from "./config.js";

// Función principal para iniciar el servidor
async function main() {
  const port = config.server.port;
  app.listen(port);
  console.log("Server on port", port);
}

// Ejecuta la función principal
main();
