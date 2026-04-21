import * as UserModel from "../models/UserModel.js";

export const register = async (req, res, next) =>{
    const {firstName,
        lastName, 
        dob, 
        address,
        course,
        major,
        status, 
        email,
        password} = req.body;


    try{
        const UserProfile = {
            firstName,
            lastName, 
            dob, 
            address,
            course,
            major,
            status
        };

    const user = await UserModel.createUser(UserProfile, email, password);
    res.status(201).json({success:true, message:user});
    }catch(err){
        console.log(err);
        res.status(400).json({succes:false, message:err})
    }
}

export const login = async (req, res) =>{
    const {email, password} = req.body;

    try{
    const token = await UserModel.login(email, password);
    res.status(200).json({success:true, message:[{result: "Login Successful"}, token]
        });
    }catch(err){
        console.log(err);
        res.status(400).json({succes:false, message:err})
    }
}