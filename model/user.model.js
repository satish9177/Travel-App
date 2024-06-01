const mongoose=require('mongoose');
const {Schema} =mongoose;
const userSchema=new Schema({
   name:{
    type:String,
    require:true
   },number:{
    type:Number,
    require:true,
    uniquie:true
   },
   email:{
    type:String,
    require:true,
    uniquie:true
   },
   password:{
    type:String,
    require:true
   }
      
},
{
   timestamps:true
}
);
const User=mongoose.model("User",userSchema);
module.exports=User;
