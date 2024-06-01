const mongoose=require('mongoose')
const {Schema}=mongoose
const wishlistSchema=new Schema({
  hostelid:{
    type:String,
    require:true
  }
})
const WishList=mongoose.model("WishList",wishlistSchema)
module.exports=WishList