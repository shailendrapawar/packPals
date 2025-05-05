import mongoose, { mongo } from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        // select: false
    },

    profilePicture: {
        url:{
            type:String,
            default:""
        },
        publicId:String
    },
    bio: {
        type: String,
        default: "lets have an adventure..,"
    },
    location: {
        type: String,
        default: ""
    },
},{
    timestamps:true
})

const UserModel=mongoose.model("User",userSchema);

export default UserModel;