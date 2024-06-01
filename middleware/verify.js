const jwt=require('jsonwebtoken')
const verifyuser=(req,res,next)=>{
    const check=req.headers.authorization;
    if(check) {
       jwt.verify(check,process.env.ACCESS_TOKEN,(err,user)=>{
         if(err) res.status(403).json({message:"error found"})
          req.user=user
          next()
      })
     }
}
module.export=verifyuser;