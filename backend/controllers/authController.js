import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signupUser = async (req, res) => {
  try{
       const { name, email, password } = req.body;

       // Check if user already exists
       const userExist = await User.findOne({ email });
       if(userExist) {
        return res.status(400).json({ message: "User alerdy registered" });
       }

       // Hash password
        const hashPassword = await bcrypt.hash(password, 10);

        //create User
         await User.create({
            name,
            email, 
            password: hashPassword
         });

           res.json({ message: "User registerd successfully" });
  } catch (error) {
     res.status(500).json({ message: "server error", error});
  }
};