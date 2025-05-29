import employeesModel from "../models/Employees.js"
import bcryptjs from "bcryptjs"; //Encriptar
import jsonwebtoken from "jsonwebtoken"; // Token
import {config} from "../../config.js";


//Creamos una array de funciones
const registerEmployeesController = {};

registerEmployeesController.register = async(req, res)=> {
    //Pedir todos los datos que vamos a guardar
    const{
        Name, 
        Age, 
        Dui, 
        PhoneNumber, 
        emailEmployees, 
        Adress, 
        EntryDate,
        password
    } = req.body;

    try{
        //1- Verificamos si el empleado ya existe
        const existEmployees = await employeesModel.findOne({emailEmployees})
        if(existEmployees) {
            return res.json({message: "Employee already exist"})
        }

        //2- Encriptar la contraseña
        const passwordHash = await bcryptjs.hash(password, 10)

        //3- Guarda todo en la tabla empleados
        const newEmployees = new employeesModel({
        Name, 
        Age, 
        Dui, 
        PhoneNumber, 
        emailEmployees, 
        Adress, 
        EntryDate,
        password: passwordHash
        })

        await newEmployees.save();

        //TOKEN

        jsonwebtoken.sign(
            //1- Guarda el id del empleado
            {id: newEmployees._id},
            //Secreto
            config.JWT.secret,
            //3- Cuando expira el token
            {expiresIn: config.JWT.expiresIn},
            //4- funcion flecha
            (error, token) =>{
                if(error) console.log("error"+ error)

                res.cookie("autoToken", token)
                res.json({message: "employees saved"})    
            }
        )
    }catch (error){
        console.log("error"+ error)
        res.json({message: "Error saving employee"})
    }
}

export default registerEmployeesController;