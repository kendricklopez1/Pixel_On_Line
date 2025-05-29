const salesController = {};
import Sales from "../models/Sales.js";

// Obtener productos
salesController.getSales = async (req, res) => {
    const sales = await Sales.find()
        .populate('Carts_id');
    res.json(sales);
};

// Insertar producto
salesController.createSales = async (req, res) => {
    const { state, Payment_Method, address, Carts_id } = req.body;
    
    const newSales = new Sales({ 
        state, 
        Payment_Method, 
        address, 
        Carts_id
    });
    
    await newSales.save();
    res.json({ message: "Sales saved" });
};

// Eliminar producto
salesController.deleteSales = async (req, res) => {
    await Sales.findByIdAndDelete(req.params.id);
    res.json({ message: "Sales deleted" });
};

// Actualizar producto
salesController.updateSales = async (req, res) => {
    const { state, Payment_Method, address, Carts_id } = req.body;
    await Sales.findByIdAndUpdate(req.params.id, { 
        state, 
        Payment_Method, 
        address, 
        Carts_id
    }, { new: true });
    res.json({ message: "Sales updated" });
};

export default salesController;