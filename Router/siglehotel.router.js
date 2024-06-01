const express=require('express')
const Hostel=require('../model/hostel.model')
const router=express.Router();
router.route("/:id").get(async(req,res)=>{
   try{
     const {id}=req.params
     console.log(id);
     const data=await Hostel.findById(id);
      res.json(data) 
    // console.log(id);
   }catch(Err){
    res.json({err:"Id not match"})
   }
})
module.exports=router