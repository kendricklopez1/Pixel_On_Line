/*
         Campos:
            comment
            Rating
            idClient
*/
 
import { Schema, model } from "mongoose";
 
const reviews = new Schema ({
    comment: {
        type: String,
        require: true
    },
    Rating: {
        type: Number,
        require: true,
        max: 5
    },
    idClient: {
        type: Schema.Types.ObjectId,
        ref: "customers",
        require: true
    }
 
}, {timestamps: true,
    strict: false
});
 
export default model ("Reviews", reviews);
 