import mongoose from "mongoose";

const userSchema = mongoose.Schema({
     name: {
        type: String,
        required: [true, 'Username is required'],
     }, 
     email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
     },
     password: {
        type: String,
        required: true, 
        minlength: [4, 'Password must be at least 4 characters long']
     }
},

 { timestamps: true}

);


export default mongoose.model('User', userSchema);