import { Schema, model } from "mongoose";

// Definición del esquema para los productos
const productsSchema = new Schema({
    Name: {
        type: String,
        required: true // El nombre del producto es obligatorio
    },
    Price: {
        type: Number,
        required: true, // El precio es obligatorio
        default: 0      // El valor predeterminado es 0
    },
    Stock: {
        type: Number,
        required: true, // La cantidad en stock es obligatoria
        default: 0      // El valor predeterminado es 0
    },
    Year: {
        type: Number // El año del producto, no obligatorio
    },
    Description: {
        type: String // Descripción del producto, no obligatoria
    },
    Mark_id: {
        type: Schema.Types.ObjectId,
        ref: 'Mark' // Referencia al modelo de marca
    },
    Model_id: {
        type: Schema.Types.ObjectId,
        ref: 'Model' // Referencia al modelo de modelo
    },
    Suppliers_id: {
        type: Schema.Types.ObjectId,
        ref: 'suppliers' // Referencia al modelo de proveedores
    },
    Image: {
        type: String // URL de la imagen del producto, no obligatoria
    }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    strict: false     // Permite almacenar campos no definidos en el esquema
});

// Exportación del modelo Products basado en el esquema
export default model("Products", productsSchema);
