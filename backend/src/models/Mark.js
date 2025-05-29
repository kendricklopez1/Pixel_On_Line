import { Schema, model } from "mongoose";

// Definición del esquema para las marcas (Mark)
const MarkSchema = new Schema({
    Mark: {
        type: String,
        required: true // El nombre de la marca es obligatorio
    }
}, { 
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
    strict: false     // Permite guardar campos no definidos en el esquema
});

// Exportación del modelo Mark basado en el esquema
export default model("Mark", MarkSchema);
