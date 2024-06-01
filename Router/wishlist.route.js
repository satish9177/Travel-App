const express=require('express'); 
const WishList=require('../model/wishlist.model')
const verifyuser=require('../middleware/verify')
const router=express.Router();
router.route('/',verifyuser).post( async (req,res)=>{
   try{
      const newWishlist= await new WishList(req.body)
      const data= await newWishlist.save()
      res.json(data)
   }catch(err){
    console.log(err)
   }
})
router.route('/:id',verifyuser).get( async(req,res)=>{
  try{
    const data=await WishList.findById(req.params.id)
    !data && res.json({message:"hotel id not found"})
    res.json(data)
  }catch(err){
    console.log(err)
  }
})
router.route('/:id',verifyuser).delete(async (req,res)=>{
   const data=await WishList.findByIdAndDelete(req.params.id)
   !data && res.json({message:"hotel id not found"})
    res.json(data)
})
module.exports=router