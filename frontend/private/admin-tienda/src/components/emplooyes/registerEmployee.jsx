import React from "react";

// Componente funcional que representa el formulario para registrar o editar un empleado
const RegisterEmployee = ({
  // Estados y setters para cada campo del formulario
  name, setName,
  lastName, setLastName,
  email, setEmail,
  password, setPassword,
  telephone, setTelephone,
  dui, setDui,
  address, setAddress,
  birthdate, setBirthdate,
  hireDate, setHireDate,
  isssNumber, setIsssNumber,
  
  saveEmployee,  // Función para guardar un nuevo empleado
  id,            // Identificador que indica si se está editando (existe id) o creando (no id)
  handleEdit     // Función para editar un empleado existente
}) => {
  return (
    // Formulario con estilos Tailwind y disposición centrada
    <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
      {/* Campo Nombre */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Nombre"
        />
      </div>

      {/* Campo Apellido */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Apellido</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Apellido"
        />
      </div>

      {/* Campo Email */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Correo electrónico"
        />
      </div>

      {/* Campo Contraseña */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Contraseña"
        />
      </div>

      {/* Campo Teléfono */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Teléfono</label>
        <input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Teléfono"
        />
      </div>

      {/* Campo DUI (opcional) */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">DUI</label>
        <input
          type="text"
          value={dui}
          onChange={(e) => setDui(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="DUI (opcional)"
        />
      </div>

      {/* Campo Dirección */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Dirección</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Dirección"
        />
      </div>

      {/* Campo Fecha de Nacimiento */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fecha de Nacimiento</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Campo Fecha de Contratación */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fecha de Contratación</label>
        <input
          type="date"
          value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Campo Número ISSS */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Número ISSS</label>
        <input
          type="text"
          value={isssNumber}
          onChange={(e) => setIsssNumber(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          placeholder="Número ISSS"
        />
      </div>

      {/* Botón para guardar o editar según exista id */}
      {!id ? (
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={saveEmployee}
        >
          Guardar
        </button>
      ) : (
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          onClick={handleEdit}
        >
          Editar
        </button>
      )}
    </form>
  );
};

export default RegisterEmployee;
