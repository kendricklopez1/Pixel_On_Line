// Importación de React y del componente Button personalizado
import React from "react";
import Button from "../models/button";

// Componente funcional que recibe un cliente y dos funciones: eliminar y actualizar
const ClientCard = ({ client, deleteClient, updateClient }) => {
  return (
    // Contenedor principal con estilos de Tailwind CSS para apariencia de tarjeta
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        {/* Nombre completo del cliente en estilo de encabezado */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {client.name} {client.lastName}
        </h2>

        {/* Información de contacto del cliente */}
        <p className="text-gray-500">📧 {client.email}</p>
        <p className="text-gray-500">📞 {client.telephone}</p>

        {/* DUI con condición: muestra texto por defecto si no hay valor */}
        <p className="text-gray-500">🪪 DUI: {client.dui || "No registrado"}</p>

        {/* Botón para eliminar al cliente, ejecuta la función con su ID */}
        <Button
          label={"Eliminar"}
          actionButton={() => deleteClient(client._id)}
          colorClass={"danger"}
        />

        {/* Botón para actualizar la información del cliente */}
        <Button
          label={"Editar Información"}
          actionButton={() => updateClient(client)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

// Exportación del componente para su uso en otras partes de la aplicación
export default ClientCard;

