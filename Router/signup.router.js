const express=require('express'); 
const router=express.Router();
const cryptoJS=require('crypto-js')
const User=require('../model/user.model')
const jwt=require('jsonwebtoken');
router.route('/signup').post(async (req,res)=>{
  try{
     const user={
      name:req.body.name,
      number:req.body.number,
      email:req.body.email,
      password: cryptoJS.AES.encrypt( req.body.password,process.env.PASSWORD_SECRET_KEY).toString()
     }
    const newuser=new User(user);
    // console.log("--1")
   const data= await newuser.save()
    res.json(data)
  }catch(err){
     res.status(404).json({errmessage:"error"})
  }
})
router.route('/login').post(async (req,res)=>{
  try{
      const user=await User.findOne({number:req.body.number})
      !user && res.status(401).json({Err:"Invalid number"})
      const decryptopassword=cryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(cryptoJS.enc.Utf8);
      decryptopassword!==req.body.password && res.status(401).json({Err:" Invalid password"})
      const ACCESS_TOKEN=jwt.sign({number:req.body.number},process.env.ACCESS_TOKEN)
      const {password,...data}=user._doc;
      // const data=user;
      res.json({...data,ACCESS_TOKEN});
  }catch(err){
     res.status(404).json({errmessage:"error"})
  }
})
module.exports=router