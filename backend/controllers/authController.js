import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

// Login  User

export const loginUser = async (req, res) => {
   try{
      const { email, password } = req.body;

      // Catch if user already exists
      const user = await User.findOne({ email });
      if(!user){
         return res.status(400).json({ message: "user not found" });
      }

      // compare password
      const match = await bcrypt.compare(password, user.password);
      if(!match) {
         return res.status(400).json({ message: "Invalid credentials" });
      }

      // Genrate jwt token 
       const token = jwt.sign(
         {id: user._id},
         process.env.JWT_SECRET,
         { expiresIn: "5d"}
       );
       res.json({
         message: "Login successful",
         token,
         user: {
            id: user._id,
            name: user.name, 
            email: user.email
         }
       });
       
   } catch (error){
     res.status(500).json({ message: "Server error", error});
   }
}