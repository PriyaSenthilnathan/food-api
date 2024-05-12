import express from "express";
const app=express();
const PORT=1010;
app.get('/',(req,res)=>{
    res.json({msg:"Hello Students"});
})
app.listen(PORT,()=>{
    console.log(`Ther server is running at http://localhost:${PORT}`);
})