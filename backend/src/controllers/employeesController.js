const employeesController = {};
import employeesModel from "../models/Employees.js";

// Select (GET)
employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees);
};

// Insert (POST)
employeesController.createEmployee = async (req, res) => {
    const { Name, Age, Dui, PhoneNumber, emailEmployees, Adress, EntryDate, password} = req.body;
    const newEmployee = new employeesModel({ Name, Age, Dui, PhoneNumber, emailEmployees, Adress, EntryDate, password });
    await newEmployee.save();
    res.json({ message: "Employee saved" });
};

// Delete (DELETE)
employeesController.deleteEmployee = async (req, res) => {
    await employeesModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
};

// Update (PUT)
employeesController.updateEmployee = async (req, res) => {
    const {Name, Age, Dui, PhoneNumber, emailEmployees, Adress, EntryDate, password} = req.body;
    await employeesModel.findByIdAndUpdate(req.params.id, { Name, Age, Dui, PhoneNumber, emailEmployees, Adress, EntryDate, password }, { new: true });
    res.json({ message: "Employee updated" });
};

export default employeesController;
