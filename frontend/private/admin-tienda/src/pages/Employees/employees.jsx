import React, { useState, useEffect } from "react";
import RegisterEmployee from "../../components/emplooyes/registerEmployee";
import ListEmployee from "../../components/emplooyes/listEmployee";
import toast, { Toaster } from "react-hot-toast";
import "../Styles.css/Employees.css";

const Employees = () => {
  const [activeTab, setActiveTab] = useState("list");
  const API = "http://localhost:4000/api/employees";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [isssNumber, setIsssNumber] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setEmployees(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const saveEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      lastName,
      email,
      password,
      telephone,
      dui,
      address,
      birthdate,
      hireDate,
      isssNumber
    };

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });

    if (!res.ok) {
      toast.error("Error al registrar empleado");
      return;
    }

    toast.success("Empleado registrado");
    resetForm();
    fetchEmployees();
  };

  const deleteEmployee = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    toast.success("Empleado eliminado");
    fetchEmployees();
  };

  const updateEmployee = (data) => {
    setId(data._id);
    setName(data.name);
    setLastName(data.lastName);
    setEmail(data.email);
    setPassword(data.password);
    setTelephone(data.telephone);
    setDui(data.dui || "");
    setAddress(data.address || "");
    setBirthdate(data.birthdate?.slice(0, 10) || "");
    setHireDate(data.hireDate?.slice(0, 10) || "");
    setIsssNumber(data.isssNumber || "");
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const updatedEmployee = {
      name,
      lastName,
      email,
      password,
      telephone,
      dui,
      address,
      birthdate,
      hireDate,
      isssNumber
    };

    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmployee),
    });

    if (!res.ok) {
      toast.error("Error al actualizar empleado");
      return;
    }

    toast.success("Empleado actualizado");
    resetForm();
    setActiveTab("list");
    fetchEmployees();
  };

  const resetForm = () => {
    setId("");
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setAddress("");
    setBirthdate("");
    setHireDate("");
    setIsssNumber("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Empleados</h1>
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            onClick={() => setActiveTab("list")}
          >
            Lista de Empleados
          </button>
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            onClick={() => setActiveTab("form")}
          >
            Gestionar Empleados
          </button>
        </div>
        {activeTab === "list" && (
          <ListEmployee
            employees={employees}
            loading={loading}
            deleteEmployee={deleteEmployee}
            updateEmployee={updateEmployee}
          />
        )}
        {activeTab === "form" && (
          <RegisterEmployee
            id={id}
            name={name}
            lastName={lastName}
            email={email}
            password={password}
            telephone={telephone}
            dui={dui}
            address={address}
            birthdate={birthdate}
            hireDate={hireDate}
            isssNumber={isssNumber}
            setName={setName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPassword={setPassword}
            setTelephone={setTelephone}
            setDui={setDui}
            setAddress={setAddress}
            setBirthdate={setBirthdate}
            setHireDate={setHireDate}
            setIsssNumber={setIsssNumber}
            saveEmployee={saveEmployee}
            handleEdit={handleEdit}
          />
        )}
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Employees;
