import userModel from "../model/usermo.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';
import validator from "validator"

//login

const LoginUser = async (req, res) => {

}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.jwt_secret)
}

//register user

const RegisterUser = async (req, res) => {

    const { name, password, email } = req.body;
    try {
        const exists = await userModel.findOne({ email })

        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }
        //vaidating email format and strong password

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter valid email" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }

        //hashing password

        const salt = await bcrypt.genSalt(12)
        const hashedPass = await bcrypt.hash(password, salt);




        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPass
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true })



    } catch (error) {

        console.log(error);
        res.json({ success: false, message: "This is error" })


    }

}

export { LoginUser, RegisterUser }