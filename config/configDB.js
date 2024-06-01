const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config()
const connectDB=async ()=>{
 try{
   await mongoose.connect( process.env.DataBaseURL
   ,{
    useUnifiedTopology:true,
    useNewUrlParser:true
   })
 }catch(err){
  console.log("connection err:",err)
 }
}
module.exports=connectDB