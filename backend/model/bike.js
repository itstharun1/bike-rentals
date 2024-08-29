import mongoose from "mongoose";
const bikeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bikeName:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    rentMoney:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    userId:{
        type:String
    }
    });
const Bike = mongoose.model('bike',bikeSchema);
export default Bike;
//name,bikeName,mobileNumber,rentMoney,image