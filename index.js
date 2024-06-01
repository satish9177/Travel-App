const express=require('express');
const app=express();
const PORT=process.env.PORT || 4000;
const mongoose=require('mongoose')
const connectDB=require('./config/configDB');
const hoteldataAddedintoDB=require('./Router/hotel.route')
const hotelgetdata=require('./Router/hoteldataget.route')
const categoryAddedintoDB=require('./Router/category.route')
const categorygetdata=require('./Router/categorydataget.route')
const singlehotel=require('./Router/siglehotel.router')
const signup=require('./Router/signup.router')
const wishlist=require('./Router/wishlist.route')
app.use(express.json())
connectDB();
app.get('/',(req,res)=>{
   res.send("hello satish")
})

app.use('/api/hotelget',hotelgetdata);
app.use('/api/hoteldata',hoteldataAddedintoDB);
app.use("/api/categorydata",categoryAddedintoDB)
app.use("/api/categoryget",categorygetdata)
app.use('/api/hotelget',singlehotel)
app.use('/api/auth',signup)
app.use('/api/wishlist',wishlist)
mongoose.connection.once("open",()=>{
  app.listen(PORT,()=>{
    console.log("server is running")
  })
})