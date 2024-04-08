const mongoose=require('mongoose');
const {Schema} = mongoose;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
    },
    image: {
        type: String // This will store the image URL
        
    }

})
const User=mongoose.model("User",UserSchema);
module.exports=User;