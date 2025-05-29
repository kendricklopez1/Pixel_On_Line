// Importación de React y del componente Button personalizado
import React from "react";
import Button from "../models/button";

// Componente funcional que muestra la tarjeta con la información de un empleado
const EmployeeCard = ({ employee, deleteEmployee, updateEmployee }) => {
  return (
    // Contenedor con estilos Tailwind CSS para diseño tipo tarjeta
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        {/* Encabezado con el nombre completo del empleado */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {employee.name} {employee.lastName}
        </h2>

        {/* Información de contacto y datos personales del empleado */}
        <p className="text-gray-500">📧 {employee.email}</p>
        <p className="text-gray-500">📞 {employee.telephone}</p>
        <p className="text-gray-500">
          🪪 DUI: {employee.dui || "No registrado"}
        </p>
        <p className="text-gray-500">
          🏠 Dirección: {employee.address || "No registrada"}
        </p>
        {/* Fecha de nacimiento: se recorta la cadena para mostrar solo YYYY-MM-DD */}
        <p className="text-gray-500">
          📅 Fecha de nacimiento: {employee.birthdate?.slice(0, 10) || "No registrada"}
        </p>
        {/* Fecha de contratación */}
        <p className="text-gray-500">
          📅 Fecha de contratación: {employee.hireDate?.slice(0, 10) || "No registrada"}
        </p>
        <p className="text-gray-500">
          🧾 ISSS: {employee.isssNumber || "No registrado"}
        </p>

        {/* Botón para eliminar al empleado */}
        <Button
          label={"Eliminar"}
          actionButton={() => deleteEmployee(employee._id)}
          colorClass={"danger"}
        />

        {/* Botón para editar la información del empleado */}
        <Button
          label={"Editar Información"}
          actionButton={() => updateEmployee(employee)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

// Exportación del componente para su uso en otras partes de la aplicación
export default EmployeeCard;
