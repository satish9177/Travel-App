const express=require('express');
const router=express.Router();
const Hotel=require('../model/hostel.model')
router.route("/").get( async (req,res)=>{
  
  try{ 
    // console.log("--1")
    // const hotelcategory=Hotel.query.category;
    // console.log(hotelcategory)
    let data;
    // if(hotelcategory){
    //        data=await Hotel.find({category:hotelcategory})
    // }else{
      // const {id}=req.params
      // console.log(id)
    data = await Hotel.find({});
  // }
   data? res.json(data):res.status(404).json({Errmessage:"data is not there"})
  }
  catch(err){
    res.status(404).json({Errmessage:"data is not found"})
  }
})
module.exports=router