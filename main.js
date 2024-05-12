import express from "express";
import foodRoutes from "./routes/food.route.js";
const app=express();
const PORT=1010;
app.get('/',(req,res)=>{
    res.json({msg:"Hello Students!"});
})
//CRUD operations
app.use('/food',foodRoutes);
app.listen(PORT,()=>{
    console.log(`Ther server is running at http://localhost:${PORT}`);
})