import React from "react";
import Button from "../models/button";

const ClientCard = ({ client, deleteClient, updateClient }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{client.name} {client.lastName}</h2>
        <p className="text-gray-500">📧 {client.email}</p>
        <p className="text-gray-500">📞 {client.telephone}</p>
        <p className="text-gray-500">🪪 DUI: {client.dui || "No registrado"}</p>
        <Button label={"Eliminar"} actionButton={() => deleteClient(client._id)} colorClass={"danger"} />
        <Button label={"Editar Información"} actionButton={() => updateClient(client)} colorClass={"warning"} />
      </div>
    </div>
  );
};

export default ClientCard;
