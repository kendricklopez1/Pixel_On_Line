import { Schema, model } from "mongoose";

// Definición del esquema para los carritos de compra
const cartsSchema = new Schema({
    state: {
        type: String,
        required: true // El estado del carrito es obligatorio
    },
    Products_id: {
        type: Schema.Types.ObjectId,
        ref: 'Products' // Referencia al producto relacionado
    },
    Clients_id: {
        type: Schema.Types.ObjectId,
        ref: 'Clients' // Referencia al cliente propietario del carrito
    }
}, { 
    timestamps: true, // Agrega automáticamente campos createdAt y updatedAt
    strict: false     // Permite guardar campos no definidos en el esquema
});

// Exportación del modelo Carts basado en el esquema
export default model("Carts", cartsSchema);
