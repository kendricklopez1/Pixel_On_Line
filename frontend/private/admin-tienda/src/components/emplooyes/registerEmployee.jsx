import React from "react";

const RegisterEmployee = ({
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
  saveEmployee,
  id,
  handleEdit
}) => {
  return (
    <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Nombre" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Apellido</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Apellido" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Correo electrónico" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Contraseña" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Teléfono</label>
        <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Teléfono" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">DUI</label>
        <input type="text" value={dui} onChange={(e) => setDui(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="DUI (opcional)" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Dirección</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Dirección" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fecha de Nacimiento</label>
        <input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Fecha de Contratación</label>
        <input type="date" value={hireDate} onChange={(e) => setHireDate(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Número ISSS</label>
        <input type="text" value={isssNumber} onChange={(e) => setIsssNumber(e.target.value)} className="w-full px-3 py-2 border rounded" placeholder="Número ISSS" />
      </div>

      {!id ? (
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={saveEmployee}>
          Guardar
        </button>
      ) : (
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600" onClick={handleEdit}>
          Editar
        </button>
      )}
    </form>
  );
};

export default RegisterEmployee;
