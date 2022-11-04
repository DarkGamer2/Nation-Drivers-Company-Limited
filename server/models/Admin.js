require("dotenv").config();
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs');

mongoose.connect(process.env.MONGO_URI)

const adminSchema=new Schema({
    adminUserName:{
        type:String,
        required:true,
        trim:true
    },
    adminEmail:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        required:[true,"Please enter a valid email address"]
    },
    adminPassword:{
        type:String,
        required:true,
        trim:true,
        required:[true,"Please enter a password"],
        minlength:[6,"Password must be at least 6 characters"]
        
    }
});

adminSchema.pre('save', function(next) {
    const user=this;
});


const Admin=mongoose.model("Admin",adminSchema);

module.exports=Admin;