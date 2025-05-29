import { Schema, model } from "mongoose";

// Definición del esquema para los proveedores
const suppliersSchema = new Schema({
    Name: {
        type: String,
        required: true // El nombre del proveedor es obligatorio
    },
    Country: {
        type: String,
        require: true // El país del proveedor es obligatorio
    },
    Phone: {
        type: String,
        require: true // El teléfono del proveedor es obligatorio
    },
    EmailSuppliers: {
        type: String,
        require: true // El correo electrónico del proveedor es obligatorio
    }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    strict: false     // Permite almacenar campos no definidos en el esquema
});

// Exportación del modelo Suppliers basado en el esquema
export default model("suppliers", suppliersSchema);
  