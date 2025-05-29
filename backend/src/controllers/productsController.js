const productsController = {};
import Products from "../models/Products.js";

// Obtener productos
productsController.getProducts = async (req, res) => {
    const products = await Products.find()
        .populate('Mark_id')
        .populate('Model_id')
        .populate('Suppliers_id');
    res.json(products);
};

// Insertar producto
productsController.createProducts = async (req, res) => {
    const { Name, Description, Price, Stock, Year, Mark_id, Model_id, Suppliers_id } = req.body;
    
    const newProduct = new Products({ 
        Name, 
        Description, 
        Price, 
        Stock, 
        Year, 
        Mark_id, 
        Model_id, 
        Suppliers_id 
    });
    
    await newProduct.save();
    res.json({ message: "Product saved" });
};

// Eliminar producto
productsController.deleteProducts = async (req, res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
};

// Actualizar producto
productsController.updateProducts = async (req, res) => {
    const { Name, Description, Price, Stock, Year, Mark_id, Model_id, Suppliers_id } = req.body;
    await Products.findByIdAndUpdate(req.params.id, { 
        Name, 
        Description, 
        Price, 
        Stock, 
        Year, 
        Mark_id, 
        Model_id, 
        Suppliers_id 
    }, { new: true });
    res.json({ message: "Product updated" });
};

export default productsController;
