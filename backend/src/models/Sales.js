import { Schema, model } from "mongoose";

// Definición del esquema para las ventas
const salesSchema = new Schema({
    state: {
        type: String,
        required: true // El estado de la venta es obligatorio
    },
    Payment_Method: {
        type: String,
        required: true // El método de pago es obligatorio
    },
    address: {
        type: String,
        required: true // La dirección de envío es obligatoria
    },
    Carts_id: {
        type: Schema.Types.ObjectId,
        ref: 'Carts' // Referencia al carrito relacionado con la venta
    }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    strict: false     // Permite almacenar campos no definidos en el esquema
});

// Exportación del modelo Sales basado en el esquema
export default model("Sales", salesSchema);
