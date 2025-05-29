import React from "react";
import EmployeeCard from "./employeeCard";

const ListEmployee = ({ employees, loading, deleteEmployee, updateEmployee }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">Listado de Empleados</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}
        {employees?.map((employee) => (
          <EmployeeCard
            key={employee._id}
            employee={employee}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
          />
        ))}
      </div>
    </div>
  );
};

export default ListEmployee;
