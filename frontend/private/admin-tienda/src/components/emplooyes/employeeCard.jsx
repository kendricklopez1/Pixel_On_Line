import React from "react";
import Button from "../models/button";

const EmployeeCard = ({ employee, deleteEmployee, updateEmployee }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {employee.name} {employee.lastName}
        </h2>
        <p className="text-gray-500">📧 {employee.email}</p>
        <p className="text-gray-500">📞 {employee.telephone}</p>
        <p className="text-gray-500">🪪 DUI: {employee.dui || "No registrado"}</p>
        <p className="text-gray-500">🏠 Dirección: {employee.address || "No registrada"}</p>
        <p className="text-gray-500">📅 Fecha de nacimiento: {employee.birthdate?.slice(0, 10) || "No registrada"}</p>
        <p className="text-gray-500">📅 Fecha de contratación: {employee.hireDate?.slice(0, 10) || "No registrada"}</p>
        <p className="text-gray-500">🧾 ISSS: {employee.isssNumber || "No registrado"}</p>
        <Button label={"Eliminar"} actionButton={() => deleteEmployee(employee._id)} colorClass={"danger"} />
        <Button label={"Editar Información"} actionButton={() => updateEmployee(employee)} colorClass={"warning"} />
      </div>
    </div>
  );
};

export default EmployeeCard;
