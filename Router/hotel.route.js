const express=require('express');
const router=express.Router();
const hotels=require('../data/hotel')
const Hotel=require('../model/hostel.model')
router.route("/").post( async (req,res)=>{
  try{ 
    await Hotel.deleteMany(); 
  const hoteldata=await Hotel.insertMany(hotels.data);
  res.json(hoteldata);}
  catch(err){
    res.status(404).json({Errmessage:"data is not inserted"})
  }
})
module.exports=router