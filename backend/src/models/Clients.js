import { Schema, model } from "mongoose";

// Definición del esquema para los clientes
const clientSchema = new Schema({
    Name: {
        type: String,
        required: true // El nombre es obligatorio
    },
    Age: {
        type: Number,
        required: true // La edad es obligatoria
    },
    PhoneNumber: {
        type: String,
        required: true // El número de teléfono es obligatorio
    },
    Email: {
        type: String,
        required: true, // El correo es obligatorio
        unique: true    // No se pueden repetir correos
    },
    Address: {
        type: String,
        required: true // La dirección es obligatoria
    },
    Dui: {
        type: String,
        required: true, // El DUI es obligatorio
        unique: true    // No se pueden repetir DUIs
    },
    password: {
        type: String,
        required: true // La contraseña es obligatoria
    },
    isVerified: {
        type: Boolean,
        default: false // Por defecto el usuario no está verificado
    }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    strict: false     // Permite guardar otros campos no definidos
});

// Exportación del modelo Clients basado en el esquema
export default model("Clients", clientSchema);
