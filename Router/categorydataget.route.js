const Category=require('../model/category.model') 
const express=require('express')
const router=express.Router();
router.route('/')
.get(async(req,res)=>{
  try{
  const data=await Category.find({})
  data?res.status(201).json(data):res.status(500).json({ErrMessage:"no category is loading"});}
  catch(err){
    res.status(404).json({ErrMessage:"not found"})
  }
})
module.exports=router