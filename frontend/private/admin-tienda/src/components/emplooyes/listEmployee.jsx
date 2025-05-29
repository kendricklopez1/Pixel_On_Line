// Importación de React y del componente EmployeeCard
import React from "react";
import EmployeeCard from "./employeeCard";

// Componente funcional que muestra una lista de empleados usando EmployeeCard
const ListEmployee = ({ employees, loading, deleteEmployee, updateEmployee }) => {
  return (
    <div>
      {/* Título principal del listado */}
      <h1 className="text-2xl font-bold underline text-center">Listado de Empleados</h1>

      {/* Contenedor con estilo para alinear las tarjetas */}
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        
        {/* Mensaje de carga mientras se obtienen los datos */}
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {/* Iteración sobre el arreglo de empleados para renderizar una tarjeta por cada uno */}
        {employees?.map((employee) => (
          <EmployeeCard
            key={employee._id}                 // Clave única para identificar el componente en la lista
            employee={employee}                // Objeto con los datos del empleado
            deleteEmployee={deleteEmployee}    // Función para eliminar un empleado
            updateEmployee={updateEmployee}    // Función para actualizar un empleado
          />
        ))}
      </div>
    </div>
  );
};

// Exportación del componente para su uso en otros módulos
export default ListEmployee;
