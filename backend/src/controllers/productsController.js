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

// GET - CORREGIDO CON POPULATE APROPIADO
productsController.getProducts = async (req, res) => {
    try {
        const products = await Products.find()
            .populate('Mark_id', 'Mark')        // ✅ Campo correcto: "Mark"
            .populate('Model_id', 'name')       // ✅ Campo correcto: "name"  
            .populate('Suppliers_id', 'Name');  // ✅ Campo correcto: "Name"
                
        // Debug: mostrar productos con populate
        console.log('📦 Productos obtenidos:', JSON.stringify(products, null, 2));
        
        res.json(products);
    } catch (error) {
        console.error('❌ Error al obtener productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// POST (INSERTAR) - CORREGIDO PARA MANEJAR IMAGE FIELD
productsController.createProducts = async (req, res) => {
    try {
        const { Name, Description, Price, Stock, Year, Mark_id, Model_id, Suppliers_id, Image } = req.body;
        let imageURL = Image || ""; // ✅ Usar el campo Image del formulario

        // Debug: mostrar datos recibidos
        console.log('📝 Creando producto con datos:', req.body);

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
            Image: imageURL // ✅ Guardar la URL de imagen
        });

        const savedProduct = await newProduct.save();
        
        // ✅ IMPORTANTE: Hacer populate del producto recién creado
        const populatedProduct = await Products.findById(savedProduct._id)
            .populate('Mark_id', 'Mark')
            .populate('Model_id', 'name')
            .populate('Suppliers_id', 'Name');
        
        console.log('✅ Producto guardado:', populatedProduct);
        
        res.json({ 
            message: "Product saved", 
            product: populatedProduct  // ✅ Devolver producto con populate
        });
    } catch (error) {
        console.error('❌ Error al crear producto:', error);
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

// DELETE - SIN CAMBIOS
productsController.deleteProducts = async (req, res) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete(req.params.id);
        
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        
        console.log('🗑️ Producto eliminado:', deletedProduct);
        res.json({ message: "Product deleted" });
    } catch (error) {
        console.error('❌ Error al eliminar producto:', error);
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};

// PUT (ACTUALIZAR) - CORREGIDO PARA DEVOLVER EL PRODUCTO COMPLETO
productsController.updateProducts = async (req, res) => {
    try {
        const { Name, Description, Price, Stock, Year, Mark_id, Model_id, Suppliers_id } = req.body;
        let imageURL = req.body.Image;

        // Debug: mostrar datos de actualización
        console.log('🔄 Actualizando producto con datos:', req.body);

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path, {
                folder: "products",
                allowed_formats: ["png", "jpg", "jpeg"]
            });
            imageURL = result.secure_url;
        }

        const updatedProduct = await Products.findByIdAndUpdate(
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
            { new: true } // Retorna el documento actualizado
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        // ✅ IMPORTANTE: Hacer populate del producto actualizado
        const populatedProduct = await Products.findById(updatedProduct._id)
            .populate('Mark_id', 'Mark')
            .populate('Model_id', 'name')
            .populate('Suppliers_id', 'Name');

        console.log('✅ Producto actualizado:', populatedProduct);
        res.json({ 
            message: "Product updated", 
            product: populatedProduct  // ✅ Devolver producto con populate
        });
    } catch (error) {
        console.error('❌ Error al actualizar producto:', error);
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

export default productsController;