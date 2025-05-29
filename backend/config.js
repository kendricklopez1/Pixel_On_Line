//Importo la .inreria que acabo de insgtalar
import dotenv from "dotenv";

//Ejecuto "Dotenv"
//me ayudara acceder al .env
dotenv.config();


export const config ={
    db: {
        URI: process.env.DB_URI || "mongodb+srv://kendrickprueba:Milito11092006@cluster2a.f9nd8.mongodb.net/Pixel_On_Line?retryWrites=true&w=majority&appName=Cluster2A",
    },
    server:{
        port: process.env.PORT || 4000,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRE,
    },
    ADMIN: {
        secret: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },
    email: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS
    },
    cloudinary: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
    
    
};