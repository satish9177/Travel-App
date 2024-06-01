const express=require('express');
const Category=require('../model/category.model')
const category=require('../data/category');
const router=express.Router();
router.route('/').post(async (req,res)=>{
  try{
    await Category.deleteMany({});
    const categories=await Category.insertMany(category.data);
    res.status(201).json(categories);
  }catch(err){
     res.status(404).json({errmessage:"category data is not there"})
  }
})
module.exports=router