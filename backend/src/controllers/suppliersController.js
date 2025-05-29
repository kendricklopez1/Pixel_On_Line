const SuppliersController = {};
import suppliersModel from "../models/Suppliers.js";

SuppliersController.getSuppliers = async (req, res) => {
    const suppliers = await suppliersModel.find();
    res.json(suppliers);
};

// Insert (POST)
SuppliersController.createSuppliers = async (req, res) => {
    const { Name, Country, Phone, EmailSuppliers } = req.body;
    const newSuppliers = new suppliersModel({ Name, Country, Phone, EmailSuppliers });
    await newSuppliers.save();
    res.json({ message: "Suppliers saved" });
};

// Delete (DELETE)
SuppliersController.deleteSuppliers = async (req, res) => {
    await suppliersModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Suppliers deleted" });
};

// Update (PUT)
SuppliersController.updateSuppliers = async (req, res) => {
    const { Name, Country, Phone, EmailSuppliers } = req.body;
    await suppliersModel.findByIdAndUpdate(req.params.id, { Name, Country, Phone, EmailSuppliers }, { new: true });
    res.json({ message: "Suppliers updated" });
};

export default SuppliersController;