const mongoose=require('mongoose');
const {Schema} =mongoose;
const categorySchema=new Schema({
   
  category: {
    type:String,
    require:true
  }
      
});
const Category=mongoose.model("Category",categorySchema);
module.exports=Category;
