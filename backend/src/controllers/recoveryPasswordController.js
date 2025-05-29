import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";

import ClientsModel from "../models/Clients.js";
import EmployeesModel from "../models/Employees.js";

import  {sendEmail, HTMLRecoveryEmail}  from "../utils/mailPasswordRecovery.js";
import { config } from "../../config.js";

//1- Crear un array de funciones

const passwordRecoveryController = {};

passwordRecoveryController.requestCode = async(req, res) => {
    const {Email} = req.body;

    try {
        let userFound;
        let userType;

        userFound = await ClientsModel.findOne({Email})
        if(userFound){
            userType = "client";
        }else{
            userFound = await EmployeesModel.findOne({Email})
            if(userFound) {
                userType = "employee";
            }
        }

        if(!userFound){
            res.json({message: "User not found"})
        }

        const code = Math.floor(10000 + Math.random()*90000).toString();

        const token = jsonwebtoken.sign(
            {Email, code, userType, verified: false},

            config.JWT.secret,

            {expiresIn: "20"}
        )

        res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*100})

        await sendEmail(
            Email,
            "You verification code",
            "Hello! Remember dont forget your pass",
            HTMLRecoveryEmail(code)
        );
    } catch (error) {
        console.log("error" + error);
    }
};



export default passwordRecoveryController;