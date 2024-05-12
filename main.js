import express from "express";
import foodRoutes from "./routes/food.route.js";
import connectDB from "./lib/db.js";
const app=express();
const PORT=1010;

//connect to DB
connectDB();
app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!"});
});
//CRUD operations
app.use('/food',foodRoutes);
app.listen(PORT,()=>{
    console.log(`Ther server is running at http://localhost:${PORT}`);
});