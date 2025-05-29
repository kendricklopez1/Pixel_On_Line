import { Schema, model } from "mongoose";

// Definición del esquema para los empleados
const employeeSchema = new Schema({
    Name: {
        type: String,
        required: true // El nombre es obligatorio
    },
    Age: {
        type: Number,
        required: true // La edad es obligatoria
    },
    Dui: {
        type: String,
        required: true // El DUI es obligatorio
    },
    PhoneNumber: {
        type: String,
        required: true // El número de teléfono es obligatorio
    },
    emailEmployees: {
        type: String,
        // required: true // Comentado, puede causar errores si no se valida por otro medio
    },
    Adress: {
        type: String,
        required: true // La dirección es obligatoria
    },
    EntryDate: {
        type: Date,
        required: true // La fecha de ingreso es obligatoria
    },
    password: {
        type: String,
        required: true // La contraseña es obligatoria
    }

}, { 
    timestamps: true, // Agrega automáticamente createdAt y updatedAt
    strict: false     // Permite almacenar campos no definidos en el esquema
});

// Exportación del modelo Employees basado en el esquema
export default model("Employees", employeeSchema);
