const mongoose = require('mongoose');


const usermodel= mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String, required:true},
        phone:{type:String, required:true},
        description:{type:String, required:true},
        location:{type:String, required:true},
        gender:{type:String, required:true},
        exp:{type:String, required:true},
        cat:{type:String, required:true}
    },
    {
        versionKey: false,
        timestampKey: true,
    }
    
);

const User= mongoose.model("user", usermodel);
module.exports = User;