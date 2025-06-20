import Products from "../models/Products.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../../config.js";

// Configurar cloudinary
cloudinary.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.api_key,
    api_secret: config.cloudinary.api_secret,
});

const productsController = {};

// GET
productsController.getProducts = async (req, res) => {
    try {
        const products = await Products.find()
            .populate('Mark_id', 'Mark')
            .populate('Model_id', 'name')
            .populate('Suppliers_id', 'Name');
        
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// POST (INSERTAR)
productsController.createProducts = async (req, res) => {
    const { Name, Description, Price, Stock, Year, Mark_id, Model_id, Suppliers_id } = req.body;
    let imageURL = "";

    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products",
            allowed_formats: ["png", "jpg", "jpeg"]
        });
        imageURL = result.secure_url;
    }

    const newProduct = new Products({
        Name,
        Description,
        Price,
        Stock,
        Year,
        Mark_id,
        Model_id,
        Suppliers_id,
        Image: imageURL
    });

    await newProduct.save();
    res.json({ message: "Product saved" });
};

// DELETE
productsController.deleteProducts = async (req, res) => {
    await Products.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
};

// PUT (ACTUALIZAR)
productsController.updateProducts = async (req, res) => {
    const { Name, Description, Price, Stock, Year, Mark_id, Model_id, Suppliers_id } = req.body;
    let imageURL = req.body.Image;

    if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "products",
            allowed_formats: ["png", "jpg", "jpeg"]
        });
        imageURL = result.secure_url;
    }

    await Products.findByIdAndUpdate(
        req.params.id,
        {
            Name,
            Description,
            Price,
            Stock,
            Year,
            Mark_id,
            Model_id,
            Suppliers_id,
            Image: imageURL
        },
        { new: true }
    );

    res.json({ message: "Product updated" });
};

export default productsController;
