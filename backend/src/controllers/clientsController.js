// Objeto que contiene las funciones del controlador
const clientsController = {};

import clientsModel from "../models/Clients.js";

// Obtener todos los clientes
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find();
    res.json(clients);
};

// Crear un nuevo cliente
clientsController.createClient = async (req, res) => {
    const { Name, Age, PhoneNumber, Email, Address, Dui } = req.body;
    const newClient = new clientsModel({ Name, Age, PhoneNumber, Email, Address, Dui });
    await newClient.save();
    res.json({ message: "Client saved" });
};

// Eliminar un cliente por ID
clientsController.deleteClient = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
};

// Actualizar los datos de un cliente por ID
clientsController.updateClient = async (req, res) => {
    const { Name, Age, PhoneNumber, Email, Address, Dui } = req.body;
    await clientsModel.findByIdAndUpdate(req.params.id, { Name, Age, PhoneNumber, Email, Address, Dui }, { new: true });
    res.json({ message: "Client updated" });
};

// Exportar el controlador para usarlo en otras partes del proyecto
export default clientsController;
