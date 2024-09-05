import mongoose from "mongoose";


const userSchema = new mongoose.schema({
    clerkId:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
},{timeStamps: true});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;