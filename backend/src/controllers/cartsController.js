const cartsController = {};
import Carts from "../models/Carts.js";

// Obtener productos
cartsController.getCarts = async (req, res) => {
    const carts = await Carts.find()
        .populate('Products_id')
        .populate('Clients_id');
    res.json(carts);
};

// Insertar producto
cartsController.createCarts = async (req, res) => {
    const { state, Products_id, Clients_id } = req.body;
    
    const newCarts = new Carts({ 
        state, 
        Products_id, 
        Clients_id
    });
    
    await newCarts.save();
    res.json({ message: "Carts saved" });
};

// Eliminar producto
cartsController.deleteCarts = async (req, res) => {
    await Carts.findByIdAndDelete(req.params.id);
    res.json({ message: "Carts deleted" });
};

// Actualizar producto
cartsController.updateCarts = async (req, res) => {
    const { state, Products_id, Clients_id } = req.body;
    await Carts.findByIdAndUpdate(req.params.id, { 
        state, 
        Products_id, 
        Clients_id 
    }, { new: true });
    res.json({ message: "Carts updated" });
};

export default cartsController;