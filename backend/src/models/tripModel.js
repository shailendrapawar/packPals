import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: String,

    budget:Number,

    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    location:{
        location:String,
        latitude:Number,
        longitude:Number
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    activities:[
        {
            day:Number,
            acitivity:String
        }
    ],

    status:{
        type:String,
        enum:["upcoming","ongoing","completed","cancelled"],
        default:"upcoming"
    }
},{
    timestamps:true
})

const TripModel=mongoose.model("Trip",tripSchema);
export default TripModel;
